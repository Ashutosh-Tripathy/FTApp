import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
// import { MyButton as Rbutton } from 'react-native-elements';
import { Button } from 'react-native'

function MyButton (props) {
  return (
    <View>
      <Button {...props} />
    </View>)
}
export default MyButton
