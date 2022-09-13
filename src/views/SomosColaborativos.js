import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions} from "@mui/material";
import SocialButtonGroup from "../components/Buttons";
import somoscolaborativos from "../img/somoscolaborativos.png"
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Button } from "@mui/material";

export default function SomosColaborativos() {
  return (
    <Grid container spacing={1} justifyContent="center" paddingTop="30px" paddingBottom="30px">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img
          src={somoscolaborativos}
          width="400px"
          height="300px"
          alt="'cone de quatro pessoas ao redor de uma pesa com balões de pensamentos discutindo e falando a repseito de idéias'"
        ></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Somos Colaborativos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tão importante quanto criar, é adotar boas soluções e por fim
            co-criar soluções ainda melhores. Valorizamos quem adota e dissemina
            tech foundations, frameworks, modos de trabalho e ritos de outros
            times e os ajudam a co-criar algo ainda melhor. Isto aumenta a
            qualidade por diferentes pessoas olharem a mesma solução, gera
            ambiente colaborativo e estimula o compartilhamento e reuso de boas
            soluções.
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
