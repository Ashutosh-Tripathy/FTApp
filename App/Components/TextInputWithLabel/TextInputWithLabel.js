import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput } from 'react-native'

function TextInputWithLabel (props) {
  return (
      <View>
      <Text>{props.labelText}</Text>
      <TextInput multiline {...props} />
      </View>)
}

TextInputWithLabel.propTypes = {
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TextInputWithLabel
