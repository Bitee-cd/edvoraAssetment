import { actionTypes } from "../constants/action-types";

const initialState={
    ridesDetails:[]
}

export const ridesReducer=(state=initialState,{type,payload})=>{
        switch (type) {
            case actionTypes.SET_RIDES:
                return {...state, ridesDetails:payload}

            case actionTypes.SELECT_RIDE_STATE:
                const filterRide= state.allRides.rideDetails.filter(ride=>ride.state===payload && ride)
                state= filterRide
                return state;
             
            default:
                return state
        }

}