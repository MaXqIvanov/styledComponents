import React from 'react';
import './App.css';
import { AppWrapper, Containter, Grid } from './style/components';
import { Info } from './Components/Info';
import { Form } from './Components/Form';

function App() {
  return (
    <AppWrapper>
      <Containter>
        <Grid>
          <Info />
          <Form />
        </Grid>
      </Containter>
  	</AppWrapper>
  );
}

export default App;
