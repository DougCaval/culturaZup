import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";

export default function SomosNerds() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://lh3.googleusercontent.com/1hX4MURj42IT8l_nSPmZPozMPIm78c1Kwjh_9wHH7JhabhpZmdsdQSc-ZUhiZ3TcWsWz4C1OWiaPE0GBSf3PCl1RyiaVS2r28bpXU0p6UgbFszuLLmzsC7Jh7uBQUBV5gA=w1280"
          alt="green iguana"
        />
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
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
