import Config from "../config/Config";
import TokenApi from "./TokenApi";

export default class MissionApi {
   static getMissions() {
      const claimedList = this.getClaimed();

      return [
         {
            id: 0,
            reward: {
               type: "TOKEN",
               tokenAddress: Config.TOKEN_STONE,
               image: window.location.origin + "/assets/stone.png",
               name: "Stone",
               amount: 999
            }, 
            title: "Executed 10 transactions on SOL",
            type: "SOL_TRANSFER_AMOUNT",
            amount: 10
         },
         {
            id: 1,
            reward: {
               type: "TOKEN",
               tokenAddress: Config.TOKEN_GOLD,
               image: window.location.origin + "/assets/gold.png",
               name: "Gold",
               amount: 999
            }, 
            title: "Transfer 5 SOL transactions",
            type: "SOL_TRANSFER_COUNT",
            amount: 5
         },
         {
            id: 3,
            reward: {
               type: "TOKEN",
               tokenAddress: Config.TOKEN_DIAMOND,
               image: window.location.origin + "/assets/diamond.png",
               name: "Diamond",
               amount: 999
            }, 
            title: "Hold 6 SOL",
            type: "HOLD_SOL",
            amount: 6
         }
      ].filter(i => !claimedList.includes(i.id));
   }

   static getClaimed() {
      return JSON.parse(localStorage.getItem(Config.SK_MISSION_CLAIMED)) || [];
   }

   static setClaimed(rewardId="") {
      let claimedList = this.getClaimed();

      claimedList.push(rewardId);

      return localStorage.setItem(Config.SK_MISSION_CLAIMED, JSON.stringify(claimedList));
   }

   static async claimReward (reward={
      address: "",
      amount: 0,
      tokenAddress: "",
      id: ""
   }) {
      //MINT DETACT
      // let encodedTransaction = await TokenApi.mintDetach({ 
      //    amount: reward.amount,
      //    message: "You have been awarded these tokens for being awesome!",
      //    tokenAddress: reward.tokenAddress
      // });

      // console.log(encodedTransaction);

      // await WalletApi.signTransaction(encodedTransaction);

      await TokenApi.airdrop({
         tokenAddress: reward.tokenAddress,
         amount: reward.amount
      });

      this.setClaimed(reward.id);
      return;
   }
}