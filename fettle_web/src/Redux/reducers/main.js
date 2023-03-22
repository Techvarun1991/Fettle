import { combineReducers } from "redux";
import { cartreducer } from "./cartreducer"
import { viewreducer } from "./Reducer";

export const rootred = combineReducers({
    cartreducer,
    viewreducer
});
