import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
// import { Button as Rbutton } from 'react-native-elements';
import { Button as Rbutton } from 'react-native'

function Button (props) {
  return (
    <View>
      <Rbutton {...props} />
    </View>)
}
export default Button
