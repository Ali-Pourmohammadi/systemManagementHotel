import { useContext, useEffect, useRef } from "react";
import { ModalContext } from "../../ui/Modal";

export default function useOutside(handler){
    const ref = useRef();
    useEffect(function(){
      function handleClick(e){
        if(ref.current && !ref.current.contains(e.target))
        handler();
    
    }
      document.addEventListener("click" , handleClick , true);
  
  
      return ()=> document.removeEventListener("click" , handleClick , true); 
    },[handler])


    return {ref}
}