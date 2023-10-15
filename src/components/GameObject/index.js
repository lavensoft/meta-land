import { useEffect, useState } from "react";
import "./styles.scss";

const GRID_SIZE = 100;

export const GameObject = ({ pos = [0, 0], onClick, image, buildMode }) => {
   const [objectPos, setObjectPos] = useState([0, 0]);

   //Update pos
   useEffect(() => {
      // Chuyển đổi độ xoay X và Z thành radian
      // const rotateX = 60 * (Math.PI / 180);
      // const rotateZ = 45 * (Math.PI / 180);

      // // Tạo ma trận biến đổi cho độ xoay Z
      // const rotationMatrixZ = [
      //    [Math.cos(rotateZ), -Math.sin(rotateZ)],
      //    [Math.sin(rotateZ), Math.cos(rotateZ)],
      // ];

      // // Tạo ma trận biến đổi cho độ xoay X
      // const rotationMatrixX = [
      //    [1, 0],
      //    [0, Math.cos(rotateX)],
      // ];

      // // Áp dụng ma trận biến đổi
      // const rotatedPosZ = [
      //    rotationMatrixZ[0][0] * pos[0] + rotationMatrixZ[0][1] * pos[1],
      //    rotationMatrixZ[1][0] * pos[0] + rotationMatrixZ[1][1] * pos[1],
      // ];

      // const rotatedPosZX = [
      //    rotatedPosZ[0],
      //    rotationMatrixX[1][1] * rotatedPosZ[1],
      // ];

      // // Làm tròn tọa độ X và Y sau khi áp dụng biến đổi
      // const snappedX = Math.round(rotatedPosZX[0] / GRID_SIZE) * GRID_SIZE;
      // const snappedY = Math.round(rotatedPosZX[1] / GRID_SIZE) * GRID_SIZE;

      // setObjectPos([snappedX, snappedY]);
      setObjectPos(pos);
   }, [pos])

   return (
      <div className="gameobject"
         style={{
            left: `${objectPos[0] - 64}px`,
            top: `${objectPos[1] - 120}px`
         }}
         onClick={onClick}
      >
         <div className="gameobject__container">
            <img className="gameobject__container__image"
               src={image}
               alt="img"
            />

            {
               buildMode && <div className="gameobject__container__build-overlay"></div>
            }
         </div>
      </div>
   )
}