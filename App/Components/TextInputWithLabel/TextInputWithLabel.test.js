import React from 'react';
import { shallow, mount } from 'enzyme';
import TextInputWithLabel from './TextInputWithLabel';
import jsdom from 'jsdom';
import {Text, TextInput} from 'react-native';

describe('MyComponent', () => {
  var props;
  beforeEach(() => {
    props = {
      name: 'Default label',
        value: 'Place holder text',
        onChange: jest.fn()
    };
  })

  it('should render correctly', () => {
    const component = shallow(<TextInputWithLabel {...props} />);
    expect(component).toMatchSnapshot();
  })

  it('should call click event', () => {
    const component = shallow(<TextInputWithLabel {...props} />);
    component.find(TextInput).first().props().onChange(1);
    expect(props.onChange).toHaveBeenCalled();
    expect(props.onChange).toHaveBeenCalledWith(1);
  })
})
