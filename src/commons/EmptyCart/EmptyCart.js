import React from 'react'
import LottieView from 'lottie-react-native'

const EmptyCart = () => {
  return (<LottieView source={require('../../assets/lotties/empty-cart.json')} autoPlay loop style={{width: '100%'}}/>)
}

export default EmptyCart