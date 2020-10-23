import { actionTypes } from './types'

const INITIAL_STATE = {
    items: [
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
            const newState = state.items.filter(item => item.key !== action.payload)
            return {
                ...state,
                items: newState
            }
        default:
            return state;
    }
}

export default reducer