import React, { Component } from 'react';
import pizzaImage from './checkout-images/pizzamonster.png';
import './Checkout.css';
import { Card } from '@mui/material';


class Confirm extends Component {
  render() {
    return (
        <section style={{textAlign: 'center'}}>
          <Card style={{justifyContent: 'center', 
            textAlign: 'center',
            backgroundColor: '#A4161A',
            color: '#f5f3f4'}}>
            <h3>Takk for din bestilling</h3>
            <p>Vi tror vi er hos deg om 15 minutter</p>
          </Card>
          <img src={pizzaImage} alt="Bilde av pizza som roterer" 
          style={{
            width: '50%',
            marginBottom: '5vh',
            animation: 'spin infinite 15s linear'
            }}></img>
        </section>
    );
  }
}

export default Confirm;