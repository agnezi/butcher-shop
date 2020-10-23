import { combineReducers } from 'redux'

import cart from './cart'
import item from './item'

const rootReducer = combineReducers({
    cart,
    item
})

export default rootReducer