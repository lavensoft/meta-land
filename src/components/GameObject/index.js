import { useEffect, useState } from "react";
import "./styles.scss";

const GRID_SIZE = 96;

export const GameObject = ({ pos=[0, 0], onClick }) => {
   const [objectPos, setObjectPos] = useState([0, 0]);

   //Update pos
   useEffect(() => {
      let gridPos = pos;

      // gridPos[0] = Math.floor(gridPos[0] / GRID_SIZE) * GRID_SIZE;
      // gridPos[1] = Math.floor(gridPos[1] / GRID_SIZE) * GRID_SIZE;

      setObjectPos(pos);
   }, [pos])

   return (
      <div className="gameobject" 
         style={{
            left: `${pos[0] - 48}px`,
            top: `${pos[1] - 90}px`
         }}
         onClick={onClick}
      >
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