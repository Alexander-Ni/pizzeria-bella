import React, { Component } from 'react';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';
import { createTheme, Typography, ThemeProvider, Grid, Card } from '@mui/material';
import pizzaCardFull from '../img/fordelsKortFull.png';
import pizzaCard from '../img/fordelsKort.jpg';
import '../App.css';


class Pizzakortet extends Component {
  render() {


    const theme = createTheme({
        palette: {
          primary: {
            main: '#A4161A',
          },
          secondary: {
            main: '#0B090A',
          },
        },
      });
  

    return (
        <section>
        <ThemeProvider theme={theme}>
          <Grid container spacing={2}>
            <Grid item xs={1} sm={1} lg={2}></Grid>
              <Grid item xs={10} sm={10} lg={4}>
              <Card style={{backgroundColor: '#f5f3f4', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 5px 15px', marginTop: '7vh', borderRadius: '2%'}}>
                <Typography variant="h2" color="primary" 
                  style={{
                    textAlign: 'center', 
                    paddingTop: '7vh'}}>
                    Bli med i gjengen!
                </Typography>
                <Typography variant="h4" color="secondary" 
                  style={{
                    textAlign: 'center', 
                    marginTop: '1vh', 
                    marginBottom: '1vh'}}>
                    Skaff deg pizzakortet i dag.  
                </Typography>
                <img src={pizzaCard} alt="Bilde av pizzakort" className="pizzaCard"></img>
                <Typography variant="h5" color="secondary" 
                  style={{
                    textAlign: 'center', 
                    marginTop: '2vh', 
                    marginBottom: '1vh'}}>
                    <h5 style={{fontWeight: '100'}}>Kjøp med pizzakortet og få hver 5. pizza gratis.</h5>
                </Typography>
                </Card>
                <Grid item xs={1} sm={2}></Grid>
            </Grid>
            <Grid item xs={2}></Grid>
              <Grid item xs={10} sm={9} lg={4}>
                  <aside>
                      <img src={pizzaCardFull} alt="Bilde av pizzakortet fullskala" className="pizzaCardImage"></img>
                  </aside>
              </Grid>
          </Grid>
        </ThemeProvider>
      </section>
    );
  }
}

export default Pizzakortet;