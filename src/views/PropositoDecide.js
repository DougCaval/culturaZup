import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import SocialButtonGroup from "../components/Buttons";
import propositodecide from "../img/propositodecide.png"
import Grid from "@mui/system/Unstable_Grid/Grid";

export default function PropositoDecide() {
  return (
    <Grid container spacing={1} justifyContent="center" paddingTop="30px" paddingBottom="30px">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img src={propositodecide} width="400px" height="300px" alt="'Ícone de um home olhando para o alto de uma montanha com uma luneta, no alto da montanha tem uma bandeira verde'"></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            O propósito Decide
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sempre opte por ações que transformem nosso propósito em realidade,
            aposte em decisões que reforcem o propósito, mesmo que o resultado
            esperado venha em longo prazo. Não importa seu cargo ou papel,
            desafie as decisões que vão contra o propósito e lembre-se que
            pequenas decisões ou atitudes do dia a dia também são relevantes
            para que o propósito esteja vivo.
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
