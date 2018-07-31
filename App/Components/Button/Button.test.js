import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './Button';
import jsdom from 'jsdom';

describe('MyComponent', () => {
  it('should render correctly', () => {
    const component = shallow(<Button title='Default title' onPress={()=>{}} />);
  
    expect(component).toMatchSnapshot();
  });

//  it('should call click event', () => {
//		const onPress = jest.fn();
//    const component = shallow(<Button onPress={onPress} />);
//		component.find(Button).first().props().onPress();
// 	expect(onPress).toHaveBeenCalled();
 // });
});
