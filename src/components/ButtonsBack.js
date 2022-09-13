import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function BackButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="Botão enviar pelo Whatsapp" color="alert">
      <Button href="/">Voltar</Button>
      
     
    </ButtonGroup>
  );
}