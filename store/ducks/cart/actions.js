import { action } from 'typesafe-actions'
import { actionTypes } from './types'

export const addToCart = (data) => action(actionTypes.ADD_TO_CART, data)
export const removeFromCart = (data) => action(actionTypes.REMOVE_FROM_CART, data)