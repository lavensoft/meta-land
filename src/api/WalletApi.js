import axios from "axios";
import Config from "../config/Config";

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
         `${Config.SHYFT}/wallet/transaction_history?network=${Config.NETWORK}&wallet=${walletAddress}`, 
         {
            headers: {
               "x-api-key": Config.SHYFT_API_TOKEN
            }
         }
      );

      return res.data?.result || [];
   }

   static async getWallet() {
      let balance = await this.getBalance();
      let transactionHistory = await this.getTransactionHistory();

      console.log(transactionHistory);
   }
}