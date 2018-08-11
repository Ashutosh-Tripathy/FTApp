import React from 'react'
import { storiesOf } from '@storybook/react-native'

import TextInputWithLabel from './TextInputWithLabel'

let props = {
  labelText: 'Default label',
  value: 'Place holder text',
  onChange: ()=>{}
};

storiesOf('TextInputWithLabel')
.add('Default', () => (
      <TextInputWithLabel {...props} />
      ))
.add('Multiline textinput', () => (
      <TextInputWithLabel multiline={true} {...props } />
      ))
