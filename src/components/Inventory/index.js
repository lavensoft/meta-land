import { Card } from "../Card";
import "./styles.scss";

export const Inventory = ({ onItemSelect }) => {
   return (
      <div className="inventory-container">
         <Card onClick={onItemSelect}/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
      </div>
   )
}