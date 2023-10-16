import { Card } from "../Card";
import "./styles.scss";
import { Button } from "../Button";

export const Inventory = ({ onItemSelect, walletData, onRefreshWallet, walletFetching }) => {
   return (
      <div className="inventory-container">
         <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
         }}>
            <h3 className="mission__title" style={{ flex: 1 }}>Your Objects</h3>
            <Button onClick={onRefreshWallet} loading={walletFetching}>Refresh Objects</Button>
         </div>

         <div className="inventory-container__container">
            {
               walletData?.nfts?.map((item, index) => {
                  if(!item.image_uri) return null;

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
      </div>
   )
}