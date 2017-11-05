import React from 'react';
import Connect, { Login } from '../Login';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

it('should exist', () => {
  const wrapper = shallow(<Login/>);
  console.log(wrapper)
});