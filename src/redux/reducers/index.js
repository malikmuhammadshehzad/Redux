import { combineReducers } from "redux"
import auth from "./auth"
import counterReducer from "./counterReducer"
import { connect } from "react-redux";
const appReducer = combineReducers({
    auth,
    counterReducer
})


export default appReducer;