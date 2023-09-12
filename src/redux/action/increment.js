import store from "../store";
import types from "../types";
const { dispatch } = store;


export default function increment(data) {
    dispatch({
        type: types.INCREMENT,
        payload: data
    })
    // return{
    //     type:types.INCREMENT,
    //     payload:data
    // }
}