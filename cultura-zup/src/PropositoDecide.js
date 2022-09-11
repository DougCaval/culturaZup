import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PropositoDecide() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://lh3.googleusercontent.com/doELj2UQmTK2O2dXi3V2BfVF7LxuSa8JbvO7uynkd35VwDkQlHK5JM_ER5tVEkP4Tv0eUJ_hHjtpoEB5TDklZicw5WeMHPgZ5mwa_4IGiOPrXn6LjTiBwBIcOkdtkBZN=w1280"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            O proósito Decide
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Sempre opte por ações que transformem nosso propósito em realidade, aposte em decisões que reforcem o propósito, mesmo que o resultado esperado venha em longo prazo. 

Não importa seu cargo ou papel, desafie as decisões que vão contra o propósito e lembre-se que pequenas decisões ou atitudes do dia a dia também são relevantes para que o propósito esteja vivo. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
