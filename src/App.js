import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { createTheme, ThemeProvider} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';

class App extends Component {
  
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
    <Router>
        <main>
          <ThemeProvider theme={theme}>
            <nav>
             <NavbarComp/>
            </nav>
          </ThemeProvider>
            <div class="clear"></div>
            <footer className="footer">
              <h4>Pizzeria Bella</h4>
              <p>Åpent mandag til søndag: 11:00 - 22:00</p>
‍              <a href="tel:+4763808080" style={{ textDecoration: 'none', color: 'white'}}>Tlf: +47 63 80 80 80</a>
            </footer>
        </main>
      </Router>
    );
  }
}

export default App;