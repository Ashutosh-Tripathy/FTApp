import React from 'react'
import { shallow, mount } from 'enzyme'
import MyButton from './MyButton'
import jsdom from 'jsdom'
import {Button} from 'react-native';

describe('MyComponent', () => {
  var props;
  beforeEach(() => {
    props = {
      title: 'Default title',
      onPress: jest.fn()
    };
  })

  it('should render correctly', () => {
    const component = shallow(<MyButton {...props}/>)
      expect(component).toMatchSnapshot()
  });

  it('should call click event', () => {
    const component = shallow(<MyButton {...props}/>);
    component.find(Button).first().props().onPress();
    expect(props.onPress).toHaveBeenCalled();
  });
})
