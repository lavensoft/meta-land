import { useEffect, useState } from "react";
import { Button } from "../Button";
import "./styles.scss";
import CraftApi from "../../api/CraftApi";
import Config from "../../config/Config";
import NFTApi from "../../api/NFTApi";

export const Craft = ({ walletData }) => {
   const [objects, setObjects] = useState([]);
   const [crafting, setCrafting] = useState(false);
   const [mat, setMat] = useState({
      [Config.TOKEN_STONE]: {
         amount: 0,
         tokenAddress: Config.TOKEN_STONE
      },
      [Config.TOKEN_GOLD]: {
         amount: 0,
         tokenAddress: Config.TOKEN_GOLD
      },
      [Config.TOKEN_DIAMOND]: {
         amount: 0,
         tokenAddress: Config.TOKEN_DIAMOND
      },
   });

   useEffect(() => {
      fetchCraftableObjects();
   }, []);

   useEffect(() => {
      setMat((mat) => ({
         [Config.TOKEN_STONE]: {
            ...mat[Config.TOKEN_STONE],
            amount: walletData.tokens?.find(i => i.address === Config.TOKEN_STONE)?.balance || 0,
         },
         [Config.TOKEN_GOLD]: {
            ...mat[Config.TOKEN_GOLD],
            amount: walletData.tokens?.find(i => i.address === Config.TOKEN_GOLD)?.balance || 0,
         },
         [Config.TOKEN_DIAMOND]: {
            ...mat[Config.TOKEN_DIAMOND],
            amount: walletData.tokens?.find(i => i.address === Config.TOKEN_DIAMOND)?.balance || 0,
         },
      }));
   }, [walletData]);

   const fetchCraftableObjects = async () => {
      let objects = CraftApi.getCraftableObjects();
      setObjects(objects);
   }

   const craftObject = async (item) => {
      setCrafting(true);
      await CraftApi.craftObject({
         nftAddress: item.address,
         nftImage: item.image,
         nftName: item.name,
         mat: item.mat
      });
      setCrafting(false);
   }

   return (
      <div className="craft">
         <h3 className="craft__title">Materials in your wallet</h3>
         <div className="craft__mat">
            <div className="craft-card__info__mat-container__mat">
               <img 
                  className="craft-card__info__mat-container__mat__image"
                  src={window.location.origin + "/assets/stone.png"}
                  alt="img"
               />  
               <span className="craft-card__info__mat-container__mat__amount">
                  { mat[Config.TOKEN_STONE].amount }
               </span>
            </div>
            <div className="craft-card__info__mat-container__mat">
               <img 
                  className="craft-card__info__mat-container__mat__image"
                  src={window.location.origin + "/assets/gold.png"}
                  alt="img"
               />  
               <span className="craft-card__info__mat-container__mat__amount">
                  { mat[Config.TOKEN_GOLD].amount }
               </span>
            </div>
            <div className="craft-card__info__mat-container__mat">
               <img 
                  className="craft-card__info__mat-container__mat__image"
                  src={window.location.origin + "/assets/diamond.png"}
                  alt="img"
               />  
               <span className="craft-card__info__mat-container__mat__amount">
                  { mat[Config.TOKEN_DIAMOND].amount }
               </span>
            </div>
         </div>
         <h3 className="craft__title">Craftable Object</h3>
         {/* <button>RE CHECK</button> */}
         <div className="craft__container">
            {
               objects.map((item, index) => {
                  return <CraftCard
                     key={`craft-card-${index}`}
                     title={item.name}
                     onClaim={
                        item.mat.every(
                           (item) => 
                              item.tokenAddress === mat[item.tokenAddress].tokenAddress
                              &&  mat[item.tokenAddress].amount >= item.amount
                        ) ? () => {
                           craftObject(item);
                        } : null
                     }
                     rewardImage={item.image}
                     rewardName={item.name}
                     rewardAmount={item.amount}
                     mat={item.mat}
                     loading={crafting}
                  />
               })
            }
         </div>
      </div>
   )
}

export const CraftCard = ({ 
   title, 
   progress=0, 
   onClaim, 
   rewardImage, 
   rewardName, 
   rewardAmount, 
   loading,
   mat=[]
}) => {
   return (
      <div className="craft-card">
         <div className="craft-card__reward">
            <img 
               className="craft-card__reward__image" 
               src={rewardImage} 
               alt={"reward"}
            />
         </div>

         <div className="craft-card__info">
            <span className="craft-card__info__title">{ title }</span>

            <div className="craft-card__info__mat-container">
               {
                  mat.map((item, index) => {
                     return (
                        <div 
                           key={`craft-item-rep-${index}`}
                           className="craft-card__info__mat-container__mat"
                        >
                           <img 
                              className="craft-card__info__mat-container__mat__image"
                              src={item.image}
                              alt="img"
                           />  
                           <span className="craft-card__info__mat-container__mat__amount">{item.amount}</span>
                        </div>
                     )
                  })
               }
            </div>
         </div>

         <div className="craft-card__action">
            <Button disabled={!onClaim} onClick={onClaim} loading={loading}>CRAFT</Button>
         </div>
      </div>
   )
}