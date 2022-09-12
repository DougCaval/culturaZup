import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions} from "@mui/material";
import SocialButtonGroup from "../components/Buttons";
import somosnerds from "../img/somosnerds.png"
import Grid from "@mui/system/Unstable_Grid/Grid";

export default function SomosNerds() {
  return (
    <Grid container spacing={1} justifyContent="center" paddingTop="30px" paddingBottom="30px">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img
          src={somosnerds}
          width="400px"
          height="300px"
          alt="'cone de pessoas em diferentes sittuações mas que exigem um conhecimento intelectual na execução das atividades'"
        ></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Somos Nerds
          </Typography>
          <Typography variant="body2" color="text.secondary">
            O nível técnico tem uma relação direta com a qualidade, eficiência e
            velocidade do que entregamos. Mantenha-se atualizado e tenha
            conhecimento profundo da parte técnica do seu trabalho. Isto não
            quer dizer que conhecimento técnico é limitado aos times de
            tecnologia. Domine tecnicamente seu trabalho, o princípio é o mesmo
            para todas as áreas da Zup, ou seja, financeiro, jurídico, rh e etc.
            Criamos tecnologia e se criamos, precisamos de altíssimo nível
            técnico.
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
