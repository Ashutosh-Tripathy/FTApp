import React from 'react';
import { shallow, mount } from 'enzyme';
import MyPicker from './MyPicker';
import jsdom from 'jsdom';
import {Picker} from 'react-native';

describe('MyComponent', () => {
  var props;
  beforeEach(() => {
    props = {
      selectedValue: 0,
      items: [
      { label: 'label1', value: 1 },
      { label: 'label2', value: 2 }
      ],
      onValueChange: jest.fn()
    };
  })

  it('should render correctly', () => {
    const component = shallow(<MyPicker {...props} />);
    expect(component).toMatchSnapshot();
  })

  it('should call click event', () => {
    const component = shallow(<MyPicker {...props} />);
    component.find(Picker).first().props().onValueChange(1, 2);
    expect(props.onValueChange).toHaveBeenCalled();
    expect(props.onValueChange).toHaveBeenCalledWith(1, 2);
  })
})
