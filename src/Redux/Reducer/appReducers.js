import {combineReducers} from "redux";
import { default as userReducer } from "./UserReducer";

const reducers = combineReducers({
    userReducer
});

export default reducers;
