import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import SocialButtonGroup from "../components/Buttons";
import sejatransformador from "../img/sejatransformador.png"
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Button } from "@mui/material";

export default function SejaTransformador() {
  return (
    <Grid container spacing={1} justifyContent="center" paddingTop="30px" paddingBottom="30px">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img
          src={sejatransformador}
          width="400px"
          height="300px"
          alt="Ícone de um home e uma mulher frente a um quadro com o desneho de uma cabeça humana verde com o desenho de uma lâmpada em cima'"
        ></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Seja Transformador
          </Typography>
          <Typography variant="body2" color="text.secondary">
            O todo é maior do que a soma das partes. O transformador está
            conectado ao objetivo final no qual seu time está trabalhando e por
            isso se sente parte da solução, ele pensa em como chegar lá, junto
            com o seu e outros times da sua iniciativa. Desempenhar seu papel
            com maestria é importante, porém se preocupar em ajudar a mover o
            todo é essencial. #beafounder
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
