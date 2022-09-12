import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions} from "@mui/material";
import SocialButtonGroup from "../components/Buttons";
import zupperajudazupper from "../img/zupperajudazupper.png"
import Grid from "@mui/system/Unstable_Grid/Grid";

export default function ZupperAjudaZupper() {
  return (
    <Grid container spacing={1} justifyContent="center" paddingTop="30px" paddingBottom="30px">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img
          src={zupperajudazupper}
          width="400px"
          height="300px"
          alt="Ícone de duas pessoas juntas montando um quebra cabeça '"
        ></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Zupper ajuda zupper
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Diz o provérbio africano "Se quer ir rápido, vá sozinho. Se quer ir
            longe, vá em grupo." Somos um único time e acreditamos que o nosso
            propósito e sonho são grandes e desafiadores o suficiente para
            pedirmos ajuda e trabalharmos juntos ao invés de sozinhos, por isso
            somos parceiros e colaborativos. Sabemos que o contexto de
            tecnologia é rápido e volátil, portanto ter um time para nos ajudar
            quando precisamos é essencial. Encontre tempo para ajudar aquele
            zupper que tem um problema. Seja parte da solução ao invés de
            apontar o dedo e se distanciar. Se alguém não está bem, seja
            interessado e dê ajuda. Acreditamos que cada pessoa, independente da
            posição, pode ajudar o Zupper a seu lado a ser mais motivado e feliz
            no trabalho do dia a dia. Queremos que todos se sintam confiantes e
            motivados, aqui na Zup cuidamos uns dos outros, criamos conexões e
            unimos propósitos.
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
