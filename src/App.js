import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Land } from "./components/Land";
import "./styles.scss";
import { GameObject } from "./components/GameObject";
import { Inventory } from "./components/Inventory";
import WalletApi from "./api/WalletApi";
import { Mission } from "./components/Mission";
import { ToastContainer } from "react-toastify";
import { Craft } from "./components/Craft";

function App() {
   const [inventoryVisible, setInventoryVisible] = useState(true);
   const [mousePos, setMousPos] = useState([0, 0]);
   const [walletConnected, setWalletConnected] = useState(false);
   const [tab, setTab] = useState(0);
   const [walletData, setWalletData] = useState({});

   //INIT
   useEffect(() => {
      //Listen mouse move
      document.onmousemove = handleMouseMove;

      initAsync();
   }, []);

   const initAsync = async() => {
      // await fetchWallet();
   }

   const fetchWallet = async() => {
      //Connect wallet
      await WalletApi.connect();
      setWalletConnected(true);

      //Get wallet
      const walletData = await WalletApi.getWallet();
      setWalletData(walletData);
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
                  <button 
                     onClick={() => setTab(0)}
                     className={`inventory__children__sidebar__item${tab === 0 ? "--active" : ""}`}
                  >O</button>
                  <button 
                     onClick={() => setTab(1)}
                     className={`inventory__children__sidebar__item${tab === 1 ? "--active" : ""}`}
                  >L</button>
                  <button 
                     onClick={() => setTab(2)}
                     className={`inventory__children__sidebar__item${tab === 2 ? "--active" : ""}`}
                  >C</button>
               </div>
               {
                  walletConnected ?
                  <div className="inventory__children__content">
                     { tab === 0 && <Inventory walletData={walletData} onItemSelect={() => setInventoryVisible(false)}/> }
                     { tab === 1 && <Mission walletData={walletData}/> }
                     { tab === 2 && <Craft walletData={walletData}/> }
                  </div> :
                  <div className="inventory__children__content"></div> 
               }
               
            </div>
         </div>
         <div className="land-container">
            <Land/>
         </div>
         <div className="gameobject-container">
            <GameObject pos={mousePos}/>
         </div>
         <ToastContainer/>
      </div>
   );
}

export default App;
