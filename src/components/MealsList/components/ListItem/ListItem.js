import React from 'react'
import { View, Platform, Button } from 'react-native'

const ListItem = ({ title, type }) => {
    const backgroundColorSelector = (mealType) => {
        if (mealType === 'Cortes bovinos') return '#c02f0c'
        if (mealType === 'Cortes suinos') return '#dca9a8'
        if (mealType === 'Cortes de aves') return '#cd8a3d'
        return '#f9c2ff'
    }
    return (
        <View style={{
            backgroundColor: Platform.OS === 'ios' ? backgroundColorSelector(type) : 'none',
            padding: 20,
            marginVertical: 8,
            borderRadius: 4
        }}>
            <Button title={title} color={Platform.OS === 'ios' ? '#000' : backgroundColorSelector(type)} />
        </View >
    )
}

export default ListItem