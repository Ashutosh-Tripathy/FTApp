import React from 'react'
import { storiesOf } from '@storybook/react-native'

import MyButton from './MyButton'

storiesOf('MyButton')
.add('Default', () => (
      <MyButton
      title='Default button' backgroundColor='red' onPress={() => {}}
      />
      ))
