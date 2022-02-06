import React,{useState} from "react";
import Context from "./Context"

const StoreState = (prop)=>{
    
    const [state,setState]=useState("none");

    const Slider=()=>{
       
        
        if(state==="none"){
            setState("block");
        }else{
            setState("none");
        }
      
    }

    const closeSlideOnWindowClick=()=>{
        setState("none");
    }

    return(
        <Context.Provider value={{state,Slider,closeSlideOnWindowClick}}>
           { prop.children}
        </Context.Provider>
    )
}

export default StoreState;