import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";

export default function ResolvaOProblemaCerto() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://lh5.googleusercontent.com/bOLZ95uUpkp4m4--XzwrqCuObqcB4vq-eJF8q8_bDTRedBiGI2nkm_zFtPu3dubMoG80dclhSrPkY3pFMWEOpyzr7-hxwJl6h7LmLFfZw892p3lXPHG8a4lrIYBYuXd9LQ=w1280"
          alt="green iguana"
        />
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
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}
