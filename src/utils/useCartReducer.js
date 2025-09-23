import { CountContext } from "./CartContext";
import {useContext} from "react";



function cartReducer(currState, action) {
    if(action.type === "decrease"){
      return currState - 1;
    }else if(action.type === "increase"){
      return currState + 1;  
    }
  }


function useCartReducer(){
    const {dataObj} = useContext(CountContext);

    cartReducer(dataObj, action);

}

export default useCartReducer