import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Picker } from 'react-native'

function PickerWithLabel(props) {
  let items = [{ label: 'Please select any value', value: 0 }, ...props.items];
  return (
    <View>
      <Text>{props.labelText}</Text>
      <Picker
        selectedValue={props.selectedValue}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => props.onValueChange(itemValue, itemIndex)}>
        {
          items.map(item => <Picker.Item key={item.value} label={item.label} value={item.value} />)
        }
      </Picker>
    </View>)
}

PickerWithLabel.propTypes = {
  labelText: PropTypes.string.isRequired,
  selectedValue: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  })).isRequired
}

export default PickerWithLabel
