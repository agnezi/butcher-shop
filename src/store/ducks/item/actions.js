import { action } from 'typesafe-actions'
import { actionTypes } from './types'

export const storeItem = (data) => action(actionTypes.ITEM, data)