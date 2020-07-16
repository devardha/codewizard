import { FETCH_COLOR } from '../actions/types'

const initialState = {
    colors: []
}

export default function(state = initialState, action: any){
    switch (action.type) {
        case FETCH_COLOR:
            return{
                ...state,
                colors: action.payload
            }
        default:
            return state;
    }
}