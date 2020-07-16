import { FETCH_COLOR } from './types'

export const fetchColor = () => (dispatch: any) => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_COLOR,
            payload: data
        }))
}