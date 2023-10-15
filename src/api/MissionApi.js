import Config from "../config/Config";
import TokenApi from "./TokenApi";
import WalletApi from "./WalletApi";

export default class MissionApi {
   static getMissions() {
      return [
         {
            id: 0,
            reward: {
               type: "TOKEN",
               address: Config.TOKEN_STONE,
               image: window.location.origin + "/assets/stone.png",
               name: "Stone",
               amount: 1
            }, 
            title: "Executed 10 transactions on SOL",
            type: "SOL_TRANSFER_AMOUNT",
            amount: 10
         },
         {
            id: 1,
            reward: {
               type: "TOKEN",
               address: Config.TOKEN_GOLD,
               image: window.location.origin + "/assets/gold.png",
               name: "Gold",
               amount: 1
            }, 
            title: "Transfer 5 SOL transactions",
            type: "SOL_TRANSFER_COUNT",
            amount: 5
         },
         {
            id: 3,
            reward: {
               type: "TOKEN",
               address: Config.TOKEN_DIAMOND,
               image: window.location.origin + "/assets/diamond.png",
               name: "Diamond",
               amount: 1
            }, 
            title: "Hold 6 SOL",
            type: "HOLD_SOL",
            amount: 6
         }
      ]
   }

   static async claimReward (reward={
      address: "",
      amount: 0
   }) {
      let encodedTransaction = await TokenApi.mintDetach({ 
         amount: reward.amount,
         message: "You have been awarded these tokens for being awesome!"
      });

      await WalletApi.signTransaction(encodedTransaction);
   }
}