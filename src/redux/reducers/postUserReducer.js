import { types } from "../types";

const initialState = {
    newUserDetails: [],
    boolean: false
}

export function postUserReducer (state = initialState, action) {
    switch (action.type) {
        case types.POST_USER:
            return {
                ...state,
                newUserDetails: [...state.newUserDetails, action.payload],
            }
        case types.TOGGLE_NOTIFICATION:
            return {
                ...state,
                boolean: action.payload
            }
        default: return state
    }
}