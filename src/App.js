import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Land } from "./components/Land";
import "./styles.scss";
import { GameObject } from "./components/GameObject";
import { Inventory } from "./components/Inventory";
import WalletApi from "./api/WalletApi";

function App() {
   const [inventoryVisible, setInventoryVisible] = useState(true);
   const [mousePos, setMousPos] = useState([0, 0]);
   const [walletConnected, setWalletConnected] = useState(false);

   //INIT
   useEffect(() => {
      //Listen mouse move
      document.onmousemove = handleMouseMove;
      
      fetchData();
   }, []);

   const fetchData = async() => {
      await WalletApi.connect();
      setWalletConnected(true);
   }

   const handleMouseMove = (e) => {
      setMousPos([e.clientX, e.clientY]);
   }

   return (
      <div className="App">
         <div className="inventory" style={{
            visibility: inventoryVisible ? "visible" : "hidden"
         }}>
            <div className="inventory__head">
               <h3 className="inventory__head__title">LAND</h3>
            </div>
            <div className="inventory__children">
               <div className="inventory__children__sidebar">
                  <button className="inventory__children__sidebar__item--active">O</button>
                  <button className="inventory__children__sidebar__item">L</button>
               </div>
               {
                  walletConnected ?
                  <div className="inventory__children__content">
                     <Inventory onItemSelect={() => setInventoryVisible(false)}/>
                  </div> :
                  <div className="inventory__children__content"></div> 
               }
               
            </div>
         </div>
         <div className="land-container">
            <Land/>
         </div>
         <div className="gameobject-container">
            {/* <GameObject pos={mousePos}/> */}
         </div>
      </div>
   );
}

export default App;
