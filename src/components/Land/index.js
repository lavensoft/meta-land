import { useEffect, useReducer, useRef, useState } from "react";
import { LandObject } from "../LandObject";
import "./styles.scss";

export const Land = ({ objects, onPlace }) => {
   console.log(objects);
   return (
      <div className="land">
         <div className="land__container">
            <LandObject objects={objects} onPlace={onPlace}/>
         </div>
      </div>
   )
}