import { useEffect, useState } from "react";
import MissionApi from "../../api/MissionApi";
import "./styles.scss";
import Config from "../../config/Config";
import { Button } from "../Button";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Mission = ({ walletData }) => {
   const [missions, setMissions] = useState([]);
   const [claming, setClaming] = useState(false);

   useEffect(() => {
      console.log(walletData);
      fetchMission();
   }, []);

   const fetchMission = async () => {
      let missions = MissionApi.getMissions();
      missions = missions.map((item) => {
         let data = {
            progress: 0
         };
         let amount = 0;

         switch(item.type) {
            case "SOL_TRANSFER_COUNT" : {
               const transactionCount = walletData.transactionHistory
                  .filter(
                     (item) => item.type === "SOL_TRANSFER"
                  ).length;
               
               amount = transactionCount;
               break;
            }
            case "SOL_TRANSFER_AMOUNT" : {
               const transactionAmount = walletData.transactionHistory
                  .filter(
                     (item) => item.type === "SOL_TRANSFER"
                  ).reduce(
                     (a, i) => a + 
                        i.actions
                           .filter((i) => i.info?.sender === localStorage.getItem(Config.SK_PUBLIC_KEY))
                           .reduce(
                           (a, i) => a + i.info?.amount || 0
                        , 0)
                  , 0);
               
               amount = transactionAmount;
               break;
            }
            case "HOLD_SOL": {
               amount = walletData.balance;
               break;
            }
            default:
               break;
         }

         let progress = amount / item.amount;
         data.progress = progress >= 1 ? 100 : progress * 100;

         return {
            ...item,
            ...data
         }
      });

      console.log(missions);

      setMissions(missions);
   }

   const claimReward = async (reward) => {
      setClaming(true);
      await MissionApi.claimReward(reward);
      await fetchMission();

      toast("🚀 Your reward has been transferred to your wallet!");
      setClaming(false);
   }

   return (
      <div className="mission">
         <h3 className="mission__title">Daily Quest</h3>
         {/* <button>RE CHECK</button> */}
         <div className="mission__container">
            {
               missions.map((item, index) => {
                  return <MissionCard
                     key={`mission-card-${index}`}
                     title={item.title}
                     progress={item.progress}
                     onClaim={
                        item.progress === 100 ? () => {
                           claimReward({
                              ...item.reward,
                              id: item.id
                           });
                        } : null
                     }
                     rewardImage={item.reward.image}
                     rewardName={item.reward.name}
                     rewardAmount={item.reward.amount}
                     loading={claming}
                  />
               })
            }
         </div>
      </div>
   )
}

export const MissionCard = ({ title, progress=0, onClaim, rewardImage, rewardName, rewardAmount, loading }) => {
   return (
      <div className="mission-card">
         <div className="mission-card__reward">
            <img 
               className="mission-card__reward__image" 
               src={rewardImage} 
               alt={"reward"}
            />
            <span className="mission-card__reward__amount">Amount: { rewardAmount }</span>
            <span className="mission-card__reward__name">{ rewardName }</span>
         </div>

         <div className="mission-card__info">
            <span className="mission-card__info__title">{ title }</span>

            <div className="mission-card__info__bar">
               <div className="mission-card__info__bar__thumb" style={{ width: `${progress}%` }}></div>   
            </div>
         </div>

         <div className="mission-card__action">
            <Button disabled={!onClaim} onClick={onClaim} loading={loading}>CLAIM</Button>
         </div>
      </div>
   )
}