import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function SocialButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="Botão enviar pelo Whatsapp" color="success">
      <Button href=" https://api.whatsapp.com/send?text=https://pocket-cultura-zup.vercel.app/">Enviar pelo WhatsApp</Button>
      
     
    </ButtonGroup>
  );
}