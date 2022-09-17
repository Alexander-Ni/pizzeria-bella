import { Card, Grid } from '@mui/material';
import React, { Component } from 'react';
import { UserForm } from './ChekoutComponents/UserForm';

class Checkout extends Component {
  render() {
    return (
        <section>
          <Grid container spacing={2}>
            <Grid item md={2} lg={4}></Grid>
            <Grid item xs={12} md={5} lg={4}>
            <Grid item md={2} lg={3}></Grid>
              <Card style={{marginTop: '2vh'}}>
                <UserForm />
              </Card>
            </Grid>
          </Grid>
        </section>  
      );
  }
}

export default Checkout;