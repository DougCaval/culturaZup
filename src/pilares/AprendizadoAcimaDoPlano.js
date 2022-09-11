import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";

export default function AprendizadoAcimaDoPlano() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://lh4.googleusercontent.com/-X_juPhCfEpexB4ZTEm9P-qI72mfyZbU9JiRerBYGmc92G_QxX5fMOl4ZbyTPOk1pTYBvmuAVHY0n7pJHh3bqA4VsgJH1w_krToFGDArIcs3ah1ej51A1i6GzWHJGAtOFA=w1280"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Aprendizado acima do plano
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quem aprende mais rápido está a frente do mercado. Pense
            freneticamente em como otimizar e acelerar o ciclo de transformar
            ideias em algo implementado, para termos feedback o mais rápido
            possível. Ao implementar uma ideia defina como irá coletar o
            aprendizado, para saber se de fato ela está ou não ajudando o
            objetivo final. Priorize acompanhar aprendizados do que acompanhar
            status de atividades. Sempre que aprender algo, compartilhe seus
            aprendizados. Isto acelera a evolução da Zup e economiza erros. Erre
            onde ninguém errou, lembra?!
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
