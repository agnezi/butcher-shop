import { actionTypes } from './types'

const INITIAL_STATE = {
    items: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ITEM:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}

export default reducer