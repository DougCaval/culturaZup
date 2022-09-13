import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import SocialButtonGroup from "../components/Buttons";
import sejaautenticoseexponha from "../img/sejaautenticoseexponha.png"
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Button } from "@mui/material";

export default function SejaautenticoSeExponha() {
  return (
    <Grid container spacing={1} justifyContent="center" paddingTop="30px" paddingBottom="30px">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img
          src={sejaautenticoseexponha}
          width="400px"
          height="300px"
          alt="Ícone de um homem usando uma capa vermelha frente ao desenho de uma seta laranja que passa por baixo e aponta para cima no seu final"
        ></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Seja autêntico, se exponha
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Somos autênticos valorizamos a nossa essência. Por isso, não se
            omita, expresse suas opiniões e ideias. Isto gera um ambiente de
            confiança, além de possibilidades e resultados exponenciais.
            Acreditamos vida no plural é muito mais legal. Considere discussões
            e críticas sobre idéias, planos ou estratégias como algo rico, algo
            que nos provoca positivamente. O mesmo se aplica ao falar com um
            zupper, ao compartilhar um feedback ou uma sugestão procure a pessoa
            e seja franco e respeitoso, mesmo que no primeiro momento pareça que
            a pessoa fique um pouco triste. No futuro ela irá entender o valor
            disso para sua evolução e mais, provavelmente ela se lembrará de
            você. Torne-se disponível caso ela precise de mais detalhes. E como
            saber se estamos expondo nossa autenticidade de forma saudável? Haja
            para o melhor dos zuppers e da Zup. Você pode se perguntar: o que
            falo nas discussões, nos grupos de WhatsApp, nos corredores, nos
            cafés, caso se tornasse público, seria motivo de orgulho pra mim?
            Confiamos em seu bom critério.
          </Typography>
        </CardContent>
        <CardActions>
        <SocialButtonGroup/>
        <Button variant="contained" aria-label="Botão voltar para home" color="warning" href="/">Voltar</Button>
      </CardActions>
      </CardActionArea>
    </Card>
    </Grid>
  );
}
