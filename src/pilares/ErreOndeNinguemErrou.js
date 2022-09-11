import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";

export default function ErreOndeNinguemErrou() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://lh4.googleusercontent.com/67DsPzp5NJFwu5CQ88rvd0j2Y0PqwDnIK2UF7e5dA8td0c4hC_LIMnyCT3LTnZXXsRLSq_I_KD4zAlaWNMBYyV8y0D4hhytVkCtYDagp9bo5to2co9zJ_MDGxuG5m0Fc_A=w1280"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Erre onde ninguém errou
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Se você errar onde ninguém errou, parabéns, você acabou de tentar o
            que ninguém tentou. Importante: não confunda errar com
            irresponsabilidade ou descaso. Estudamos os melhores do mundo, nos
            comparamos com referências de mercado. Aprendemos com os erros e
            acertos deles, buscamos variáveis para criar algo ainda melhor. Por
            isso, construa coisas audaciosas e erre com estilo.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
