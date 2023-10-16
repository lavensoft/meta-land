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
            id: 1,
            image: window.location.origin + "/assets/obj1.png",
            name: "Adventure",
            address: "GbXyRBTRwtk5GAVuBs1rjHouCBwzHqbUB4vDC9ni527x",
            amount: 1,
            mat: [
               {
                  image: window.location.origin + "/assets/gold.png",
                  name: "Stone",
                  amount: 3,
                  tokenAddress: Config.TOKEN_GOLD,
               }
            ]
         }, 
         {
            id: 2,
            image: window.location.origin + "/assets/obj2.png",
            name: "Land CAB",
            address: "6UYW1ebNmFyEYmtDVep5GoSpoa76TJCdpvXvGBtqaZUY",
            amount: 1,
            mat: [
               {
                  image: window.location.origin + "/assets/gold.png",
                  name: "Stone",
                  amount: 3,
                  tokenAddress: Config.TOKEN_GOLD,
               }
            ]
         }, 
         {
            id: 3,
            image: window.location.origin + "/assets/obj3.png",
            name: "Koopa Troopa",
            address: "2wDU12V82DXeVCttTxampX5kPSzRcfTkvEEwTMf3B19N",
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
                  amount: 2,
                  tokenAddress: Config.TOKEN_GOLD,
               }
            ]
         }, 
         {
            id: 4,
            image: window.location.origin + "/assets/obj4.png",
            name: "Man Jump",
            address: "Bq9UvSNu1b9ptC88Vz85DpWY4So3gapLsRkkzLkJegCt",
            amount: 1,
            mat: [
               {
                  image: window.location.origin + "/assets/diamond.png",
                  name: "Stone",
                  amount: 3,
                  tokenAddress: Config.TOKEN_DIAMOND,
               }
            ]
         }, 
         {
            id: 5,
            image: window.location.origin + "/assets/obj5.png",
            name: "Frog",
            address: "Dezj8J6A7gF8jF7BDFdcSWv1QkBNYWrSCtv9P9yeeKsf",
            amount: 1,
            mat: [
               {
                  image: window.location.origin + "/assets/stone.png",
                  name: "Stone",
                  amount: 2,
                  tokenAddress: Config.TOKEN_STONE,
               }
            ]
         }, 
         {
            id: 5,
            image: window.location.origin + "/assets/obj6.png",
            name: "Candle",
            address: "2wnW2N8XiyVNLZDV8qVjv8UTWGZYPyr2f2c6fe8UoHNk",
            amount: 1,
            mat: [
               {
                  image: window.location.origin + "/assets/gold.png",
                  name: "Stone",
                  amount: 1,
                  tokenAddress: Config.TOKEN_GOLD,
               }
            ]
         }, 
         {
            id: 6,
            image: window.location.origin + "/assets/obj7.png",
            name: "Doge Ship",
            address: "3pNnDmzhWKzW6ea58QKheQwStbpPuDwoNoTn9XZfDFrJ",
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
                  amount: 2,
                  tokenAddress: Config.TOKEN_DIAMOND,
               }
            ]
         }, 
         {
            id: 7,
            image: window.location.origin + "/assets/obj8.png",
            name: "Pizza Man",
            address: "CmsUXLTmD3BwvaLxqUHbcgnxhKsBW4brWwAJNZyRxt6u",
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
            id: 8,
            image: window.location.origin + "/assets/obj9.png",
            name: "Man Ship",
            address: "9KhLnVW6pr1CVVyrfJsqLP71uByDzQfBaWLKvzs6sfCi",
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
                  amount: 2,
                  tokenAddress: Config.TOKEN_DIAMOND,
               }
            ]
         }, 
      ]
   }
}