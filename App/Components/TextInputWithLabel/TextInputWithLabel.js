import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput } from 'react-native'

function TextInputWithLabel (props) {
  var { name, ...props} = props;
  return (
      <View>
      <Text>{name}</Text>
      <TextInput multiline {...props} />
      </View>)
}

TextInputWithLabel.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TextInputWithLabel
