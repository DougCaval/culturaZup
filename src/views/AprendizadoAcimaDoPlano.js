import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import SocialButtonGroup from "../components/Buttons";
import aprendizadoacimadoplano from "../img/aprendizadoacimadoplano.png"
import Grid from "@mui/system/Unstable_Grid/Grid";

export default function AprendizadoAcimaDoPlano() {
  return (
    <Grid container spacing={1} justifyContent="center" paddingTop="30px" paddingBottom="30px">
    <Card sx={{ maxWidth: 345 }} className="Card">
      <CardActionArea>
        <img src={aprendizadoacimadoplano} width="400px" height="300px" alt="aprendizado acima do plano"></img>
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
          <SocialButtonGroup/>
        </CardActions>
      </CardActionArea>
    </Card>
    </Grid>
  );
}
