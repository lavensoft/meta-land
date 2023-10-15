import { Card } from "./components/Card";
import { Land } from "./components/Land";
import "./styles.scss";

function App() {
   return (
      <div className="App">
         <div className="inventory">
            <div className="inventory__head">
               <h3 className="inventory__head__title">LAND</h3>
            </div>
            <div className="inventory__children">
               <div className="inventory__children__sidebar">
                  <button className="inventory__children__sidebar__item--active">O</button>
                  <button className="inventory__children__sidebar__item">L</button>
               </div>
               <div className="inventory__children__content">
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
               </div>
            </div>
         </div>
         <div className="land-container">
            <Land/>
         </div>
      </div>
   );
}

export default App;
