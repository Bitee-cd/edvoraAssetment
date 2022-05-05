import { ridesReducer } from "./ridesReducer";
import { combineReducers } from "redux";

export const reducers=combineReducers({
    allRides:ridesReducer,
})