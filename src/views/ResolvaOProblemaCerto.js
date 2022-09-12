import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions} from "@mui/material";
import SocialButtonGroup from "../components/Buttons";
import resolvaoproblemacerto from "../img/resolvaoproblemacerto.png"
import Grid from "@mui/system/Unstable_Grid/Grid";



export default function ResolvaOProblemaCerto() {
  return (
    <Grid container spacing={1} justifyContent="center" paddingTop="30px" paddingBottom="30px">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img
          src={resolvaoproblemacerto}
          width="400px"
          height="300px"
          alt="resolva o problema certo"
        ></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Resolva o problema certo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Estou resolvendo o problema certo? O Zupper faz esta pergunta todos
            os dias. Nosso impacto está relacionado com nossa capacidade de
            enxergar o contexto de forma ampla e priorizar o problema correto no
            meio de tantos outros. Somos velozes e isso traz um pouco de caos,
            mas se estivermos trabalhando na melhor solução, estaremos no
            caminho certo. Converse o tempo todo com os stakeholders do seu
            projeto, invista tempo para entender o contexto estratégico de onde
            sua iniciativa está inserida. Seja obcecado por entender o que é
            relevante para o cliente, seus comportamentos, hábitos, desejos,
            problemas, desafios e assim por diante. Use estas e outras
            informações do mercado para evoluir sua capacidade analítica de
            encontrar o melhor problema.
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
