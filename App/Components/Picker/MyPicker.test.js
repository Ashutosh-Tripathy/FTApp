
import React from 'react';
import { shallow, mount } from 'enzyme';
import MyPicker from './MyPicker';
import jsdom from 'jsdom';

describe('MyComponent', () => {
  it('should render correctly', () => {
    const component = shallow(<MyPicker selectedValue='0' />);

    expect(component).toMatchSnapshot();
  });


  it('should call click event', () => {
    //const onPress = jest.fn();
    //debugger;
    //const component = shallow(<Picker title='Default title' onPress={onPress} />);
    //let btn = component;
    //console.log(btn);
    //let a = 'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT';
    //console.log(a);
    //component.find(Picker).first().props().onPress();
    //expect(onPress).toHaveBeenCalled();
  });
});
