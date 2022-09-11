import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SomosColaborativos() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://lh4.googleusercontent.com/hF310VrY1SIHj0aBn7c_Pcu2KSzgGAdpH5bB4d0yphFD_0tsX8mkM6OITYU48Fz2k6v339_6OeuRejMlM9oIQtRAIW1Ix78V6E9X3_o34sODdibkHUsMy8vsHnljnOvgyg=w1280"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Somos Colaborativos
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Tão importante quanto criar, é adotar boas soluções e por fim co-criar soluções ainda melhores.



Valorizamos quem adota e dissemina tech foundations, frameworks, modos de trabalho e ritos de outros times e os ajudam a co-criar algo ainda melhor. 



Isto aumenta a qualidade por diferentes pessoas olharem a mesma solução, gera ambiente colaborativo e estimula o compartilhamento e reuso de boas soluções. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
