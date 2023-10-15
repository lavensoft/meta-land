import "./styles.scss";

export const Mission = () => {
   return (
      <div className="mission">
         <h3 className="mission__title">Daily Quest</h3>
         <div className="mission__container">
            <MissionCard
               title={"Executed 1 transaction on SOL"}
               progress={50}
            />
         </div>
      </div>
   )
}

export const MissionCard = ({ title, progress=0, onClaim }) => {
   return (
      <div className="mission-card">
         <div className="mission-card__info">
            <span className="mission-card__info__title">{ title }</span>

            <div className="mission-card__info__bar">
               <div className="mission-card__info__bar__thumb" style={{ width: `${progress}%` }}></div>   
            </div>
         </div>

         <div className="mission-card__action">
            <button className="mission-card__action__button" onClick={onClaim}>CLAIM</button>
         </div>
      </div>
   )
}