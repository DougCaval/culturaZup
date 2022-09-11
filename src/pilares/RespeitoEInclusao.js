import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function RespeitoEInclusao() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://lh3.googleusercontent.com/exdSDC8hK3HP17zNi7v0kYWqdN8ZcLSl4Siwh7vIdrvXhTdWloQhkGo-Ml6ceOVTET4B3XYZTm6DGswqx4ywpYphYoFi3TpTUZqD5r6JeTnRPj5WIo8CZ-o6ZFVSkDkOhw=w1280"
          alt="green iguana"
        />
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
      </CardActionArea>
    </Card>
  );
}
