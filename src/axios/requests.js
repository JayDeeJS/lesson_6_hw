import { $api } from "./requester"

const ENDPOINTS = {
    USER: '/users'
}
export const sendNewUserData = async(params) => {
    try {
        const response = $api.post(ENDPOINTS.USER, params)
        return response
    } catch (error) {
        console.error(error);
    }
}