import { SEND_REQUEST } from '../actions/types'

const initialState = {
    request: ''
}

export default function(state = initialState, action: any){
    switch (action.type) {
        case SEND_REQUEST:
            return{
                ...state,
                request: action.payload
            }
        default:
            return state;
    }
}