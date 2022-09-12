import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import SocialButtonGroup from "../components/Buttons";
import erreondeninguemerrou from "../img/erreondeninguemerrou.png"
import Grid from "@mui/system/Unstable_Grid/Grid";


export default function ErreOndeNinguemErrou() {
  return (
    <Grid container spacing={1} justifyContent="center" paddingTop="30px" paddingBottom="30px">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img
          src={erreondeninguemerrou}
          width="400px"
          height="300px"
          alt="Imagem com o ícone de um homem segurando o componente de desenvolviemnto na frente de um monitor com uma aplicação na tela "
        ></img>
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
         <SocialButtonGroup/>
        </CardActions>
      </CardActionArea>
    </Card>
    </Grid>
  );
}
