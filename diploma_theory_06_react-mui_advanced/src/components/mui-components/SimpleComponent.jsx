/*Создаем в папке components папку mui-components, а в ней - компонент SimpleComponent. Этот компонент должен содержать поле ввода (инпут), кнопку, и текст (typography variant="body1").
*/
import { Button, Typography, TextField, IconButton, Grid } from '@mui/material'
import { useState } from 'react';

import SaveIcon from '@mui/icons-material/Save';

export default function SimpleComponent() {

  const [inputValue, setInputValue] = useState('Default text');
  const [displayedValue, setDisplayedValue] = useState('Default text');

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography variant='body1'>This text takes 1/2 of available width</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant='body1'>This text also takes 1/2 of available width</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body1'>This text takes all available width</Typography>
      </Grid>
    </Grid>
  );
}