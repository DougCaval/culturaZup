import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import SocialButtonGroup from "../components/Buttons";
import vaiquedaconfia from "../img/vaiquedaconfia.png"
import Grid from "@mui/system/Unstable_Grid/Grid";

export default function VaiQueDaConfia() {
  return (
    <Grid container spacing={1} justifyContent="center" paddingTop="30px" paddingBottom="30px">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img
          src={vaiquedaconfia}
          width="400px"
          height="300px"
          alt="Ícone de uma mulher sentada em um foguete que está en ascenção , segurando uam bandeira verde na mão direita"
        ></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Vai que dá! Confia 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Acredite e ande pra frente. Confiamos na inteligência coletiva ao
            discutir problemas em grupo, focamos em qual a melhor forma de
            resolvê-lo e então seguimos em frente. Sabemos que reclamações,
            justificativas, planos super detalhados ou discussões sem fim nos
            fazem perder o foco em resolver o problema. Temos um time forte e
            diverso então nem sempre haverá consenso. Nesse caso, o líder irá
            conduzir para a melhor decisão. Quando uma decisão é tomada
            comprometa-se em fazer o seu melhor para o sucesso dela, novos
            aprendizados vão trazer melhores decisões no futuro ou se necessário
            ajustes durante curso. Para seguir em frente e focar na velocidade
            também assumimos riscos. Ou seja, quanto maior o grau de incerteza
            de algo, invista menos em planos detalhados. Neste caso defina o
            objetivo (onde chegar), observe as variáveis e o contexto e então
            mova ações rápidas. Vai que dá!!!
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
