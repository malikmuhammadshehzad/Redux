import store from "../store"
import types from "../types"
const { dispatch } = store;
export default function decrement(data) {
   dispatch({
      type: types.DECREMENT,
      payload: data
   })

   // return{
   //     type:types.DECREMENT,
   //     payload:data
   // }
}