import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';


export class UserForm extends Component {
    state = {
      step: 1,
      firstName: '',
      lastName: '',
      adress: '',
      city: '',
      zip_code: '',
      cardName: '',
      cardNumber: '',
      cvc: '',
    };
  
    nextStep = () => {
      const { step } = this.state;
      this.setState({
        step: step + 1
      });
    };
  
    previousStep = () => {
      const { step } = this.state;
      this.setState({
        step: step - 1
      });
    };
  

    handleChange = input => e => {
      this.setState({ [input]: e.target.value });
    };
  
    render() {
      const { step } = this.state;
      const { firstName, lastName, adress, city, zip_code, cardName, cardNumber, cvc } = this.state;
      const values = { firstName, lastName, adress, city, zip_code, cardName, cardNumber, cvc};
  
      switch (step) {
        case 1:
          return (
            <FormUserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 2:
          return (
            <FormPersonalDetails
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 3:
          return (
            <Confirm
              values={values}
            />
          );
      }
    }
  }
  
  export default UserForm;