import React from 'react'
import { View, Platform, Button } from 'react-native'
import PropTypes from 'prop-types'

import { storeItem } from '../../../../../store/ducks/item/actions'
import { useDispatch } from 'react-redux'


const ListItem = ({ title, type, onPress }) => {
    const dispatch = useDispatch()

    const saveItemAndOpenModal = () => {
        dispatch(storeItem(title))
        onPress()
    }

    const backgroundColorSelector = (mealType) => {
        if (mealType === 'Cortes bovinos') return '#c02f0c'
        if (mealType === 'Cortes suinos') return '#dca9a8'
        if (mealType === 'Cortes de aves') return '#cd8a3d'
        return '#f9c2ff'
    }
    return (
        <View style={{
            backgroundColor: Platform.OS === 'ios' ? backgroundColorSelector(type) : 'none',
            marginVertical: 8,
            borderRadius: 4,
            height: 40,
        }}>
            <Button onPress={saveItemAndOpenModal} title={title} color={Platform.OS === 'ios' ? '#000' : backgroundColorSelector(type)} />
        </View >
    )
}

ListItem.propTypes = {
    onPress: PropTypes.func.isRequired
}


export default ListItem