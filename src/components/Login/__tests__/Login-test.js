import React from 'react';
import ConnectedLogin, { Login } from '../Login';
import Header from './../../Header/Header'
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';



describe('Login Component', () => {
  describe('Rendering, Page Layout', () => {
    let wrapper = null;

    beforeEach(() => {
      wrapper = shallow(<Login/>);
    });

    it('should exist', () => {
      expect(wrapper);
    });

    it('should contain header component', () => {
      expect(wrapper.find(Header)).toHaveLength(1);
    });

    it('should contain form with email, password and submit inputs', () => {
      expect(wrapper.find('form').children()).toHaveLength(3);
    });
  });

  describe('Events', () => {
    let wrapper = null;
    beforeEach(() => {
      const props = {
        addEmail: jest.fn(),
        addPassword: jest.fn(),
        submitLoginSuccess: jest.fn(),
        submitLoginFail: jest.fn()
      };

      wrapper = shallow(<Login {...props}/>);
    })

    it('should call prop functions', () => {
      const submitFormProps = wrapper.find('form').props();
      const changeEmailProps = wrapper.find('input').at(0).props();
      const changePasswordProps = wrapper.find('input').at(1).props();
  
      submitFormProps.onSubmit();
      changeEmailProps.onChange();
      changePasswordProps.onChange();
    })
  })
})

