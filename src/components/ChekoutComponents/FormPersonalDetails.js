import React, { Component } from 'react';
import { Box, createTheme, TextField, ThemeProvider, Button, Card, InputLabel, FormControl } from '@mui/material';
import MenuApp from '../Menu';
import NativeSelect from '@mui/material/NativeSelect';
import FormHelperText from '@mui/material/FormHelperText';


class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    previous = e => {
        e.preventDefault();
        this.props.previousStep();
    }

    render() {
        const theme = createTheme({
            palette: {
              primary: {
                main: '#0B090A',
              },
              secondary: {
                main: '#A4161A',
              },
            },
          });

        const { values, handleChange } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Box component="form" 
                     sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },
                }}>
                    <Card style={{justifyContent: 'center', 
                        textAlign: 'center',
                        backgroundColor: '#A4161A',
                        color: '#f5f3f4'}}>
                        <h3 style={{paddingTop: '1vh'}}>Betaling</h3>
                        <p price={MenuApp.name.toString}></p>
                    </Card>
                    <h4 style={{textAlign: 'center', marginTop: '1vh', marginBottom: '2vh'}}>Fyll inn kortinformasjon</h4>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl  style={{borderRadius: '2px grey solid'}}
                            variant="">
                            <NativeSelect defaultValue={10}>
                            <option value={10}> Pizzakortet</option>
                            <option value={20}> Visa</option>
                            <option value={30}> Mastercard</option>
                            </NativeSelect>
                            <FormHelperText>Kortleverandør</FormHelperText>
                        </FormControl>
                    </Box>
                    <TextField style={{padding: '1vh'}}
                        required
                        variant="outlined"
                        label="Navn på kortholder"
                        onChange={handleChange('cardName')}
                        defaultValue={values.cardName}
                        error={values.cardName == '' || String(values.cardName).length < 1}
                    />
                    <TextField style={{padding: '1vh'}}
                        required
                        variant="outlined"
                        type="number"
                        label="Kortnummer"
                        onChange={handleChange('cardNumber')}
                        defaultValue={values.cardNumber}
                        error={values.cardNumber == '' || values.cardNumber.length != 16}
                    />
                    <br />
                    <div style={{display: 'flex'}}>
                    <Box style={{width: '20%', marginLeft: '20%'}}>
                        <FormControl  
                            variant="">
                            <NativeSelect defaultValue={1}>
                            <option value={1}>Januar</option>
                            <option value={2}>Februar</option>
                            <option value={3}>Mars</option>
                            <option value={4}>April</option>
                            <option value={5}>Mai</option>
                            <option value={6}>Juni</option>
                            <option value={7}>Juli</option>
                            <option value={8}>August</option>
                            <option value={9}>September</option>
                            <option value={10}>Oktober</option>
                            <option value={11}>November</option>
                            <option value={12}>Desember</option>
                            </NativeSelect>
                            <FormHelperText>Måned</FormHelperText>
                        </FormControl>
                    </Box>
                    <Box style={{width: '20%'}}>
                        <FormControl  
                            variant="">
                            <NativeSelect defaultValue={1}>
                            <option value={1}>2021</option>
                            <option value={2}>2022</option>
                            <option value={3}>2023</option>
                            <option value={4}>2024</option>
                            <option value={5}>2025</option>
                            </NativeSelect>
                            <FormHelperText>År</FormHelperText>
                        </FormControl>
                    </Box>
                    <TextField style={{width: '20%', marginRight: '15%'}}
                        required
                        variant="outlined"
                        type="number"
                        label="CVC"
                        onChange={handleChange('cvc')}
                        defaultValue={values.cvc}
                        error={values.cvc == '' || values.cvc.length != 3}
                    />
                    </div>
                    <Button
                        style={{width: '40%', marginTop: '2vh', marginLeft: '1vw',  marginBottom: '2vh'}} 
                        onClick={this.previous}
                        color="primary" 
                        variant="contained" 
                        size="large">
                        Tilbake
                    </Button>
                    <Button
                        style={{width: '40%', marginTop: '2vh', marginLeft: '1vw', marginBottom: '2vh'}} 
                        onClick={this.continue}
                        color="primary" 
                        variant="contained" 
                        size="large">
                        Neste
                    </Button>
                </Box>
            </ThemeProvider>
        )
    }
}
export default FormPersonalDetails;