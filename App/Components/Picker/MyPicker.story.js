import React from 'react'
import { storiesOf } from '@storybook/react-native'

import MyPicker from './MyPicker'

let props = {
  selectedValue: 0,
  items: [],
  onValueChange: () => {}
}

let propsWithItems = {
  selectedValue: 0,
  items: [
  { label: 'label1', value: 1 },
  { label: 'label2', value: 2 }
  ],
  onValueChange: () => {}
}

storiesOf('Picker')
.add('Default', () => (
      <MyPicker {...props} />
      ))
.add('Have list of items', () => (
      <MyPicker {...propsWithItems} />
      ))
