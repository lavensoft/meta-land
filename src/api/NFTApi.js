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

      console.log(file);

      //POST
      var formdata = new FormData();
      formdata.append("network", Config.NETWORK);
      formdata.append("private_key", Config.LAVENES_PRIV_KEY);
      formdata.append("name", req.name);
      formdata.append("symbol", "LVC");
      formdata.append("description", "Lavenes Land NFT");
      formdata.append("attributes", '[{"trait_type":"dev power","value":"over 900"}]');
      formdata.append("external_url", "https://lavenes.com");
      formdata.append("max_supply", "0");
      formdata.append("royalty", "0");
      formdata.append("file", file);
      formdata.append("data", file);
      formdata.append("receiver", walletAddress);

      await  axios.post(
         `${Config.SHYFT}/nft/create`, 
         formdata,
         {
            headers: {
               "x-api-key": Config.SHYFT_API_TOKEN
            }
         }
      );
   };
}