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
    let props = null;

    beforeEach(() => {
      props = {
        addEmail: jest.fn(),
        addPassword: jest.fn(),
        submitLoginSuccess: jest.fn(),
        submitLoginFail: jest.fn()
      };
      wrapper = shallow(<Login {...props}/>);
    });

    it('should call `addEmail` prop from input handler', () => {
      const changeEmail = wrapper.find('input').at(0);
  
      let targetObj = {
        target: {
          value: 'n',
          name: 'email'
        }
      };
     
      changeEmail.simulate('change', targetObj);
      expect(props.addEmail.mock.calls).toHaveLength(1);
    });

    it('should call `addPassword` from input handler', () => {
      const changePassword = wrapper.find('input').at(1);

      let targetObj = {
        target: {
          value: 'p',
          name: 'password'
        }
      };

      changePassword.simulate('change', targetObj);
      expect(props.addPassword.mock.calls).toHaveLength(1)
    });

    it('should submit form and call `submitLogin` props', () => {
      const submitForm = wrapper.find('form');
      const preventDefault = jest.fn();

      submitForm.simulate('submit', { preventDefault });
      expect(props.submitLoginSuccess.mock.calls).toHaveLength(0);
    })
  })
})

