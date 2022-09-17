import React, { Component } from 'react';
import { Box, createTheme, TextField, ThemeProvider, Button, Card } from '@mui/material';



export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    changeValue(e, type) {
        const value = e.target.value;
        const nextState = {};
        nextState[type] = value;
        this.setState(nextState);
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
              text: {
                disabled: '#0B090A',
              }
            },
          });

        const { values, handleChange } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Box component="form" 
                     sx={{'& .MuiTextField-root': { m: 1, width: '30ch' },
                }}>
                    <Card style={{justifyContent: 'center', 
                        textAlign: 'center',
                        backgroundColor: '#A4161A',
                        color: '#f5f3f4'}}>
                        <h3>Hvor skal vi levere?</h3>
                    </Card>
                    <TextField style={{padding: '1vh'}}
                        required
                        variant="outlined"
                        label="Fornavn"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        error={values.firstName == '' }
                        success={values.firstName != '' && String(values.firstName).length > 1}
                    />
                    <TextField style={{padding: '1vh'}}
                        required
                        variant="outlined"
                        label="Etternavn"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                        error={values.lastName == ''}
                        success={values.lastName != '' && String(values.lastName).length > 1}
                    />
                    <br />
                    <TextField style={{padding: '1vh'}}
                        required
                        variant="outlined"
                        label="Adresse"
                        onChange={handleChange('adress')}
                        defaultValue={values.adress}
                        error={values.adress == ''}
                        success={values.adress != '' && String(values.adress).length > 1}
                    />
                    <TextField style={{padding: '1vh'}}
                        required
                        variant="outlined"
                        type="number"
                        label="Postnummer 0-1300"                   
                        InputProps={{max: 1300, min: 0}} 
                        onChange={handleChange('zip_code')}
                        defaultValue={values.zip_code}
                        error={values.zip_code == '' || values.zip_code > 1300 || values.zip_code < 0}
                        success={values.zip_code !=  '' && values.zip_code <= 1300 && values.zip_code >= 0}
                    />
                    <TextField style={{padding: '1vh'}}
                        variant="outlined"
                        label="By"
                        value="Oslo"
                        disabled={true}
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <TextField style={{padding: '1vh'}}
                        variant="outlined"
                        label="Kommentar"
                        onChange={handleChange('comment')}
                        defaultValue={values.comment}
                    />
                    <Button
                        style={{width: '40%', marginTop: '2vh', marginLeft: '1vw', marginBottom: '2vh'}} 
                        onClick={this.continue} 
                        color="primary" 
                        variant="contained" 
                        size="large">
                        Neste
                    </Button>
                    <br />
                </Box>
            </ThemeProvider>
        )
    }
}

export default FormUserDetails
