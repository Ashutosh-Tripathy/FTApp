import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Picker } from 'react-native';

function MyPicker(props) {

  return (
      <View>
      <Picker
      selectedValue={props.selectedValue}
      style={{ height: 50, width: 100 }}
      onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
      </Picker>
      </View>);
}


MyPicker.propTypes = {
  selectedValue: PropTypes.string.isRequired
  };

export default MyPicker;

