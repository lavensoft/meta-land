import { useEffect, useRef, useState } from "react";
import { GameObject } from "../GameObject"
import "./styles.scss";

export const LandObject = ({ objects=[], onPlace}) => {
   const [mousePos, setMousPos] = useState([0, 0]);
   const containerRef = useRef(0);

   //INIT
   useEffect(() => {
      //Listen mouse move
      containerRef.current.onmousemove = handleMouseMove;
   }, []);

   const handleMouseMove = (e) => {
      setMousPos([e.clientX, e.clientY]);
   }

   return (
      <div className="gameobject-container" ref={containerRef}>
         {
            objects.map((item, index) => {
               return <GameObject 
                  key={`game-object-${index}`}
                  pos={item.buildMode ? mousePos : item.pos}
                  onClick={() => onPlace(item, mousePos)}
                  buildMode={item.buildMode}
                  image={item.image_uri}
               />
            })
         }
      </div>
   )
}