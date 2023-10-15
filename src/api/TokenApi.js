import axios from "axios";
import Config from "../config/Config";

export default class TokenApi {
   static async mintDetach(req = {
      amount: 0,
      message: "",
      tokenAddress: ""
   }) {
      const walletAddress = localStorage.getItem(Config.SK_PUBLIC_KEY);
      let res = await axios.post(
         `${Config.SHYFT}/token/mint_detach`, 
         {
            network: Config.NETWORK,
            mint_authority: Config.ADDRESS_LAVENES,
            receiver: walletAddress,
            amount: req.amount,
            message: req.message,
            fee_payer: walletAddress,
            token_address: req.tokenAddress
         },
         {
            headers: {
               "x-api-key": Config.SHYFT_API_TOKEN
            }
         }
      );

      return res.data.result.encoded_transaction;
   }

   static airdrop(req = {
      tokenAddress: "",
      amount: 0
   }) {
      const walletAddress = localStorage.getItem(Config.SK_PUBLIC_KEY);
      return axios.post(
         `${Config.SHYFT}/token/transfer`, 
         {
            network: Config.NETWORK,
            from_address: Config.LAVENES_PRIV_KEY,
            to_address: walletAddress,
            token_address: req.tokenAddress,
            amount: req.amount,
         },
         {
            headers: {
               "x-api-key": Config.SHYFT_API_TOKEN
            }
         }
      );
   }
}