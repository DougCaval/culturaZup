import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button} from "@mui/material";

export default function ZupperAjudaZupper() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://lh3.googleusercontent.com/IwUzdOQmvgcYwGQ9YizhJ-5ulutkhULsiGG5Eu-T1s-U44wINdAgB4szeegza_j6QyfCAxRU1O7wKXFkPfYiredd_nVrNEp-EvX25v5wcBeHa6VBlYBZYZLAxP4t4KkjkA=w1280"
          alt="green iguana"
        />
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
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}
