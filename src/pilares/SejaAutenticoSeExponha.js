import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";

export default function SejaautenticoSeExponha() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://lh5.googleusercontent.com/77ZlRtzRA1LemaxkERlbls6nZMGXom7ACd5cabub_SjfeOQ3iyQSR7ZeIbSlJmd7Hhd5l7odqP9wG9xw9S4k7H8X4dConekooQF_67vp0FbLXCvNkwyu9v70znZi_iK1nQ=w1280"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Seja autêntico, se exponha
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Somos autênticos valorizamos a nossa essência. Por isso, não se
            omita, expresse suas opiniões e ideias. Isto gera um ambiente de
            confiança, além de possibilidades e resultados exponenciais.
            Acreditamos vida no plural é muito mais legal. Considere discussões
            e críticas sobre idéias, planos ou estratégias como algo rico, algo
            que nos provoca positivamente. O mesmo se aplica ao falar com um
            zupper, ao compartilhar um feedback ou uma sugestão procure a pessoa
            e seja franco e respeitoso, mesmo que no primeiro momento pareça que
            a pessoa fique um pouco triste. No futuro ela irá entender o valor
            disso para sua evolução e mais, provavelmente ela se lembrará de
            você. Torne-se disponível caso ela precise de mais detalhes. E como
            saber se estamos expondo nossa autenticidade de forma saudável? Haja
            para o melhor dos zuppers e da Zup. Você pode se perguntar: o que
            falo nas discussões, nos grupos de WhatsApp, nos corredores, nos
            cafés, caso se tornasse público, seria motivo de orgulho pra mim?
            Confiamos em seu bom critério.
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
