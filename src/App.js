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
import Config from "./config/Config";
import { Oval } from "react-loader-spinner";

function App() {
   const [inventoryVisible, setInventoryVisible] = useState(true);
   const [walletConnected, setWalletConnected] = useState(false);
   const [tab, setTab] = useState(0);
   const [walletData, setWalletData] = useState({});
   const [objects, setObjects] = useState([]);
   const [loading, setLoading] = useState(true);

   //INIT
   useEffect(() => {
      initAsync();
   }, []);

   const initAsync = async() => {
      await loadMap();
      await fetchWallet();
      setLoading(false);
   }

   const fetchWallet = async() => {
      //Connect wallet
      await WalletApi.connect();
      setWalletConnected(true);

      //Get wallet
      const walletData = await WalletApi.getWallet();
      setWalletData(walletData);
   }

   const loadMap = async() => {
      const map = JSON.parse(localStorage.getItem(Config.SK_MAP));

      setObjects(map);
   }

   const buildObject = (object) => {
      setObjects((obj) => [...obj, {
         ...object,
         buildMode: true
      }]);
   }

   const placeObject = (item, mousePos) => {
      let obj = [...objects];
      obj[obj.length - 1] = {
         ...obj[obj.length - 1],
         buildMode: false,
         pos: mousePos
      };

      //Save to local
      localStorage.setItem(Config.SK_MAP, JSON.stringify(obj));

      setObjects((objs) => [...obj]);
      setInventoryVisible(true);
   }

   return (
      <div className="App">
         {
            loading && 
            <div className="loading-overlay">
               <Oval
                  height={45}
                  width={45}
                  color="black"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel='oval-loading'
                  secondaryColor="rgba(0,0,0,.3)"
                  strokeWidth={5}
                  strokeWidthSecondary={5}
               />
            </div>
         }
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
                     { tab === 0 && <Inventory walletData={walletData} onItemSelect={
                        (item) => {
                           setInventoryVisible(false);
                           buildObject(item);
                        }}/> 
                     }
                     { tab === 1 && <Mission walletData={walletData}/> }
                     { tab === 2 && <Craft walletData={walletData}/> }
                  </div> :
                  <div className="inventory__children__content"></div> 
               }
               
            </div>
         </div>
         <div className="land-container">
            <Land objects={objects} onPlace={placeObject}/>
         </div>
         <ToastContainer/>
      </div>
   );
}

export default App;
