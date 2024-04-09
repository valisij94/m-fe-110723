/*Создаем в папке components папку mui-components, а в ней - компонент SimpleComponent. Этот компонент должен содержать поле ввода (инпут), кнопку, и текст (typography variant="body1").
*/
import { Typography, TextField, Grid, Button } from '@mui/material'
import { useState } from 'react';

import SaveIcon from '@mui/icons-material/Save';

export default function SimpleComponent() {

  const [inputValue, setInputValue] = useState('Default text');
  const [displayedValue, setDisplayedValue] = useState('Default text');

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={4}>
        <TextField variant='outlined' fullWidth label='Name' />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField variant='outlined' fullWidth label='LastName' />
      </Grid>
      <Grid item xs={12} lg={4}>
        <TextField variant='outlined' fullWidth label='Email' />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <TextField variant='outlined' fullWidth label='LastName' />
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={4}>
        <TextField variant='outlined' fullWidth label='Email' />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Button variant='outlined' fullWidth>Register</Button>
      </Grid>
    </Grid>

  );
}