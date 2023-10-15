import { Oval } from "react-loader-spinner";
import "./styles.scss";

export const Button = ({ disabled, children, onClick, loading }) => {
   return (
      <button className="button" onClick={onClick} disabled={disabled || loading}>
         {
            loading ? 
            <Oval
               height={15}
               width={15}
               color="white"
               wrapperStyle={{}}
               wrapperClass=""
               visible={true}
               ariaLabel='oval-loading'
               secondaryColor="rgba(255,255,255,.3)"
               strokeWidth={3}
               strokeWidthSecondary={3}
            /> : children
         }
      </button>
   )
}