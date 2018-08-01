import React from 'react'
import { storiesOf } from '@storybook/react-native'

import MyPicker from './MyPicker'

storiesOf('Picker')
.add('Default', () => (
      <MyPicker selectedValue='0'></MyPicker>
      ))
