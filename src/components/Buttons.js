import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function SocialButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="Botão enviar pelo Whatsapp">
      <Button href=" https://api.whatsapp.com/send?text=https://zup-pocket-culture.herokuapp.com/">Enviar pelo WhatsApp</Button>
      
     
    </ButtonGroup>
  );
}