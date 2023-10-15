import axios from "axios";
import Config from "../config/Config";

export default class TokenApi {
   static async mintDetach(req = {
      amount: 0,
      message: ""
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
            fee_payer: Config.ADDRESS_LAVENES,
         },
         {
            headers: {
               "x-api-key": Config.SHYFT_API_TOKEN
            }
         }
      );

      return res.data.result.encoded_transaction;
   }
}