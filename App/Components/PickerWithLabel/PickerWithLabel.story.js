import React from 'react'
import { storiesOf } from '@storybook/react-native'

import PickerWithLabel from './PickerWithLabel'

let props = {
  labelText: 'Default text',
  selectedValue: 0,
  items: [],
  onValueChange: () => { }
};

let propsWithItems = {
  ...props,
  items: [
    { label: 'label1', value: 1 },
    { label: 'label2', value: 2 }
  ]
};


let propsWithSelectedValue = {
  ...propsWithItems,
  selectedValue: 2
};

storiesOf('Picker')
  .add('Default', () => (
    <PickerWithLabel {...props} />
  ))
  .add('Have list of items with defalut text', () => (
    <PickerWithLabel {...propsWithItems} />
  ))
  .add('Have list of items with selected text', () => (
    <PickerWithLabel {...propsWithSelectedValue} />
  ))
