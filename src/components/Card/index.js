import "./styles.scss";

export const Card = ({ name, image, qty, onClick }) => {
   return (
      <div className="card" onClick={onClick}>
         <img className="card__image" 
            alt="none" 
            src={image}
         />
         <span className="card__own-count">OWNED {qty}</span>
         <span className="card__name">{name}</span>
      </div>
   )
}