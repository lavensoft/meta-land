import Config from "../config/Config";
import NFTApi from "./NFTApi";
import TokenApi from "./TokenApi";

export default class CraftApi {
   static async craftObject(req= {
      nftAddress: "",
      nftImage: "",
      nftName: "",
      mat: []
   }) {
      //Airdrop object
      await NFTApi.airdrop({
         nftAddress: req.nftAddress,
         name: req.nftName,
         imageUrl: req.nftImage 
      });

      //Burn token
      for(const m of req.mat) {
         await TokenApi.burn({
            tokenAddress: m.tokenAddress,
            amount: m.amount
         })
      }
   }

   static getCraftableObjects() {
      return [
         {
            id: 0,
            image: window.location.origin + "/assets/obj1.png",
            name: "Land CAB",
            address: "6UYW1ebNmFyEYmtDVep5GoSpoa76TJCdpvXvGBtqaZUY",
            amount: 1,
            mat: [
               {
                  image: window.location.origin + "/assets/gold.png",
                  name: "Stone",
                  amount: 1,
                  tokenAddress: Config.TOKEN_GOLD,
               },
               {
                  image: window.location.origin + "/assets/diamond.png",
                  name: "Stone",
                  amount: 1,
                  tokenAddress: Config.TOKEN_DIAMOND,
               }
            ]
         }, 
         {
            id: 0,
            image: window.location.origin + "/assets/obj1.png",
            name: "Trofy of Social",
            address: "",
            amount: 1,
            mat: [
               {
                  image: window.location.origin + "/assets/stone.png",
                  name: "Stone",
                  amount: 1,
                  tokenAddress: Config.TOKEN_STONE,
               },
               {
                  image: window.location.origin + "/assets/gold.png",
                  name: "Stone",
                  amount: 1,
                  tokenAddress: Config.TOKEN_GOLD,
               }
            ]
         }, 
         {
            id: 0,
            image: window.location.origin + "/assets/obj1.png",
            name: "Trofy of Social",
            address: "",
            amount: 1,
            mat: [
               {
                  image: window.location.origin + "/assets/diamond.png",
                  name: "Stone",
                  amount: 1,
                  tokenAddress: Config.TOKEN_DIAMOND,
               }
            ]
         }, 
         {
            id: 0,
            image: window.location.origin + "/assets/obj1.png",
            name: "Trofy of Social",
            address: "",
            amount: 1,
            mat: [
               {
                  image: window.location.origin + "/assets/stone.png",
                  name: "Stone",
                  amount: 1,
                  tokenAddress: Config.TOKEN_STONE,
               }
            ]
         }, 
         {
            id: 0,
            image: window.location.origin + "/assets/obj1.png",
            name: "Trofy of Social",
            address: "",
            amount: 1,
            mat: [
               {
                  image: window.location.origin + "/assets/gold.png",
                  name: "Stone",
                  amount: 1,
                  tokenAddress: Config.TOKEN_GOLD,
               }
            ]
         }
      ]
   }
}