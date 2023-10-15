import "./styles.scss";

export const Card = ({ name, image, qty, onClick }) => {
   return (
      <div className="card" onClick={onClick}>
         <img className="card__image" 
            alt="none" 
            src="https://www.arweave.net/e1sVHzTkGvSTvkDxsyF9PBjbYOJQvhli9E4tduDOR4Y?ext=png"
         />
         <span className="card__own-count">OWNED 64</span>
         <span className="card__name">Trophy of TOP</span>
      </div>
   )
}