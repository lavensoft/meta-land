import "./styles.scss";

export const Card = ({ name, image, qty }) => {
   return (
      <div className="card">
         <img className="card__image" 
            alt="none" 
            src="https://www.arweave.net/e1sVHzTkGvSTvkDxsyF9PBjbYOJQvhli9E4tduDOR4Y?ext=png"
         />
         <span className="card__own-count">OWNED 64</span>
         <span className="card__name">Trophy of TOP</span>
      </div>
   )
}