import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SejaTransformador() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://lh4.googleusercontent.com/WmBQc--w1N8wExnSAfQD62O2I-aFXosCFd-Hlh3Qx8bFHD7__Q1QkAlzXwsagzm4FPva6nNAy02YNYsFLZ9d-QjGnrCD1NkGFpredqnYUxEGZIlYwvxmPKN-mK8IYAkWFA=w1280"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Seja Transformador
          </Typography>
          <Typography variant="body2" color="text.secondary">
          O todo é maior do que a soma das partes.  



O transformador está conectado ao objetivo final no qual seu time está trabalhando e por isso se sente parte da solução, ele pensa em como chegar lá, junto com o seu e outros times da sua iniciativa. 



Desempenhar seu papel com maestria é importante, porém se preocupar em ajudar a mover o todo é essencial. #beafounder 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
