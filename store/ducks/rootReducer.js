import { combineReducers } from 'redux'

import cart from '../ducks/cart'
import item from '../ducks/item'

const rootReducer = combineReducers({
    cart,
    item
})

export default rootReducer