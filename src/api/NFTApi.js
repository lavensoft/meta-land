import { Network, ShyftSdk } from "@shyft-to/js";
import Config from "../config/Config";
import axios from "axios";

const shyft = new ShyftSdk({ apiKey: Config.SHYFT_API_TOKEN, network: Network.Devnet });

export default class NFTApi {
   static mint({ nftAddress }) {
      return axios.post(
         `${Config.SHYFT}/nft/mint`, 
         {
            network: Config.NETWORK,
            private_key: Config.LAVENES_PRIV_KEY,
            master_nft_address: nftAddress,
            receiver: Config.ADDRESS_LAVENES,
         },
         {
            headers: {
               "x-api-key": Config.SHYFT_API_TOKEN
            }
         }
      );
   }

   static async airdrop(req = {
      nftAddress: "",
      name: "",
      imageUrl: ""
   }) {
      const walletAddress = localStorage.getItem(Config.SK_PUBLIC_KEY);
      
      //Mint on lavenes
      // await this.mint({ nftAddress: req.nftAddress });

      // //Transfer to user
      // await axios.post(
      //    `${Config.SHYFT}/nft/transfer`, 
      //    {
      //       network: Config.NETWORK,
      //       from_address: Config.LAVENES_PRIV_KEY,
      //       token_address: req.nftAddress,
      //       to_address: walletAddress,
      //       transfer_authority: false
      //    },
      //    {
      //       headers: {
      //          "x-api-key": Config.SHYFT_API_TOKEN
      //       }
      //    }
      // );

      //Create file
      let response = await fetch(req.imageUrl);
      let data = await response.blob();
      let metadata = {
         type: 'image/png'
      };
      let file = new File([data], "image.png", metadata);

      //POST
      await  axios.post(
         `${Config.SHYFT}/nft/create`, 
         {
            network: Config.NETWORK,
            private_key: Config.LAVENES_PRIV_KEY,
            name: req.name,
            symbol: "LVC",
            descriptioN: "Lavenes Land NFT",
            attributes: '[{"trait_type":"dev power","value":"over 900"}]',
            external_url: "https://lavenes.com",
            max_supply: 0,
            royalty: 0,
            receiver: walletAddress,
            file: file,
         },
         {
            headers: {
               "x-api-key": Config.SHYFT_API_TOKEN
            }
         }
      );
   };
}