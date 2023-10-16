import axios from "axios";
import Config from "../config/Config";
import { Network, ShyftSdk } from "@shyft-to/js";

const shyft = new ShyftSdk({ apiKey: Config.SHYFT_API_TOKEN, network: Network.Devnet });

export default class WalletApi {
   static async connect() {
      await window.phantom.solana.connect();

      let publicKey = window.phantom.solana.publicKey.toBase58();
      console.log(publicKey);

      localStorage.setItem(Config.SK_PUBLIC_KEY, publicKey);
   }

   static isConnected() {
      return window.phantom.solana.isConnected;
   }

   static async getBalance() {
      const walletAddress = localStorage.getItem(Config.SK_PUBLIC_KEY);
      let res = await axios.get(
         `${Config.SHYFT}/wallet/balance?network=${Config.NETWORK}&wallet=${walletAddress}`,
         {
            headers: {
               "x-api-key": Config.SHYFT_API_TOKEN
            }
         }
      );

      return res.data?.result?.balance || 0;
   }

   static async getTransactionHistory() {
      const walletAddress = localStorage.getItem(Config.SK_PUBLIC_KEY);
      let res = await axios.get(
         `${Config.SHYFT}/wallet/transaction_history?network=${Config.NETWORK}&wallet=${walletAddress}&tx_num=50`, 
         {
            headers: {
               "x-api-key": Config.SHYFT_API_TOKEN
            }
         }
      );

      return res.data?.result || [];
   }

   static async getAllTokens() {
      const walletAddress = localStorage.getItem(Config.SK_PUBLIC_KEY);
      let res = await axios.get(
         `${Config.SHYFT}/wallet/all_tokens?network=${Config.NETWORK}&wallet=${walletAddress}`, 
         {
            headers: {
               "x-api-key": Config.SHYFT_API_TOKEN
            }
         }
      );

      return res.data?.result || [];
   }

   static async getAllNFT() {
      const walletAddress = localStorage.getItem(Config.SK_PUBLIC_KEY);
      let res = await axios.get(
         `https://api.shyft.to/sol/v2/nft/read_all?network=${Config.NETWORK}&address=${walletAddress}&update_authority=${Config.ADDRESS_LAVENES}&page=1&size=50`, 
         {
            headers: {
               "x-api-key": Config.SHYFT_API_TOKEN
            }
         }
      );

      let list = res.data?.result?.nfts || [];

      list = list.filter((item) => item.creators[0].address === Config.ADDRESS_LAVENES);

      return list;
   }

   static async getWallet() {
      let balance = await this.getBalance();
      await new Promise((res) => setTimeout(res, 500));
      let transactionHistory = await this.getTransactionHistory();
      await new Promise((res) => setTimeout(res, 500));
      let tokens = await this.getAllTokens();
      await new Promise((res) => setTimeout(res, 500));
      let nfts = await this.getAllNFT();

      return {
         balance,
         transactionHistory,
         tokens,
         nfts
      }
   }

   static async signTransaction(encodedTransaction) {
      const toTransaction = (encodedTransaction) => window.solanaWeb3.Transaction.from(Uint8Array.from(atob(encodedTransaction), c => c.charCodeAt(0)))
      const transaction = toTransaction(encodedTransaction);

      console.log(transaction);

      const signedTransaction = await window.phantom.solana.signTransaction(transaction);
      console.log("SIGN");
      const connection = new window.solanaWeb3.Connection(Config.CONNECTION);
      console.log("SEND RAW");
      await connection.sendRawTransaction(signedTransaction.serialize());

      console.log("TRANSACTION CONFIRMED!!!");
   }
}