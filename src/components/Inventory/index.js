import { Card } from "../Card";
import "./styles.scss";

export const Inventory = ({ onItemSelect, walletData }) => {
   return (
      <div className="inventory-container">
         {
            walletData?.nfts?.map((item, index) => {
               return (
                  <Card
                     key={`in-nft-card-${index}`}
                     name={item.name}
                     image={item.image_uri}
                     qty={1}
                     onClick={() => onItemSelect(item)}
                  />
               )
            })
         }
      </div>
   )
}