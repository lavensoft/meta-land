import "./styles.scss";

export const GameObject = ({ pos=[0, 0] }) => {
   return (
      <div className="gameobject" style={{
         left: `${pos[0] - 48}px`,
         top: `${pos[1] - 90}px`
      }}>
         <div className="gameobject__container">
            <img className="gameobject__container__image"
               src="https://www.arweave.net/e1sVHzTkGvSTvkDxsyF9PBjbYOJQvhli9E4tduDOR4Y?ext=png" 
               alt="img"
            />

            <div className="gameobject__container__build-overlay">
               
            </div>
         </div>
      </div>
   )
}