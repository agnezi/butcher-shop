import { actionTypes } from './types'

const INITIAL_STATE = {
    items: [
        { title: 'nda', price: 0 }
    ]
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                items: []
            }
        default:
            return state;
    }
}

export default reducer