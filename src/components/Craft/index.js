import { useEffect, useState } from "react";
import { Button } from "../Button";
import "./styles.scss";
import CraftApi from "../../api/CraftApi";

export const Craft = () => {
   const [objects, setObjects] = useState([]);
   const [crafting, setCrafting] = useState(false);

   useEffect(() => {
      fetchCraftableObjects();
   }, [])

   const fetchCraftableObjects = async () => {
      let objects = CraftApi.getCraftableObjects();
      setObjects(objects);
   }

   return (
      <div className="craft">
         <h3 className="craft__title">Daily Quest</h3>
         {/* <button>RE CHECK</button> */}
         <div className="craft__container">
            {
               objects.map((item, index) => {
                  return <CraftCard
                     key={`craft-card-${index}`}
                     title={item.name}
                     onClaim={
                        item.progress === 100 ? () => {
                           
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