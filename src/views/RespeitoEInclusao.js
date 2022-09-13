import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import SocialButtonGroup from "../components/Buttons";
import respeitoeinclusao from "../img/respeitoeinclusao.png"
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Button } from "@mui/material";


export default function RespeitoEInclusao() {
  return (
    <Grid container spacing={1} justifyContent="center" paddingTop="30px" paddingBottom="30px">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img
          src={respeitoeinclusao}
          width="400px"
          height="300px"
          alt="'cones de vários pessoas de diferentes raças, nacionalidades todas juntas formando um grupo único'"
        ></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Respeito e inclusão
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Na Zup acreditamos que todos devem ter espaço, voz, escolha e
            progresso. Escute atentamente seus pares, líderes e liderados.
            Respeite todos independente da classe social, gênero, idade, raça,
            religião ou orientação sexual. Além do respeito, no seu sentido mais
            amplo, valorizamos também a diversidade. Buscamos por ela no
            dia-a-dia, pensamos nela na hora de contratar, indicar pessoas e
            montar times “Fora da Curva”, sabemos que diferenças enriquecem os
            debates e nos fazem ter decisões profundas. Não admitimos atos de
            desrespeito por abuso de poder ou quaisquer que sejam as variáveis.
            Lembre-se, “Seja Autêntico”, aqui você tem espaço para ser você
            mesmo e será respeitado por isso.
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
