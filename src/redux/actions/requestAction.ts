import { SEND_REQUEST } from './types'

export const sendRequest = (request: any) => ({
    type: SEND_REQUEST,
    payload: request
})