import { actionTypes } from "../constants/action-types"

export const setRides =(allrides)=>{
    return {
        type:actionTypes.SET_RIDES,
        payload:allrides,
    }
}

export const selectCity =(city_selected)=>{
    return {
        type:actionTypes.SELECT_RIDE_CITY,
        payload:city_selected,
    }
}
export const selectState =(state_selected)=>{
    return {
        type:actionTypes.SELECT_RIDE_STATE,
        payload:state_selected,
    }
}