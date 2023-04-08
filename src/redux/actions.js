import { sendNewUserData } from "../axios/requests"
import { types } from "./types"

function userInfo (obj) {
    return {
        type: types.POST_USER,
        payload: obj
    }
}

export function toggleNotification (boolean) {
    return {
        type: types.TOGGLE_NOTIFICATION,
        payload: boolean
    }
}

export function createUserAction (userData) {
    return async function (dispatch) {
        const req = await sendNewUserData(userData)
        if (req.status >= 200) {
            await dispatch(userInfo(req.data))
            console.log(req.status);

            dispatch(toggleNotification(true))
            setTimeout(() => {
                dispatch(toggleNotification(false))
            }, 5000)
            
        } else {
            console.error(req.status);
        }
    }
}