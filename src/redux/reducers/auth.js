import action from "../action";
import types from "../types";
 
let initialState={
   userData:null
}
 

export  default function  (state=initialState  ,action){
    switch (action.type) {
        
        case types.lOGIN:{
            let data = action.payload
        return{...state , userData:data }
        }
   case types.SIGNUP:{
    let data=action.payload
    return{...state,userData:data }
   }
        default:
            return{...state}
           
    }
}