import React from 'react'
import { storiesOf } from '@storybook/react-native'

import MyPicker from './MyPicker'

let props = {
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
    <MyPicker {...props} />
  ))
  .add('Have list of items with defalut text', () => (
    <MyPicker {...propsWithItems} />
  ))
  .add('Have list of items with selected text', () => (
    <MyPicker {...propsWithSelectedValue} />
  ))
