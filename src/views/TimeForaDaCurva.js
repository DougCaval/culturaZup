import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import SocialButtonGroup from "../components/Buttons";
import timeforadacurva from "../img/timeforadacurva.png"
import Grid from "@mui/system/Unstable_Grid/Grid";

export default function TimeForaDaCurva() {
  return (
    <Grid container spacing={1} justifyContent="center" paddingTop="30px" paddingBottom="30px">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img
          src={timeforadacurva}
          width="400px"
          height="300px"
          alt="Ícone mostrando algumas pessoas levantando um gráfico frente a um programa de computador com engrenagens e formulários simulando uma dashboard"
        ></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Time fora da curva
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Uma variável crítica do crescimento exponencial é trabalhar com
            pessoas tão boas ou melhores que você. Por isso zelamos para que o
            nosso time seja muito “fora da curva”. Como integrantes de um time
            “Fora da curva” nos desafiamos, ensinamos uns aos outros e geramos
            atritos positivos com os quais todos crescem e constroem resultados
            em cima de ideias incríveis. Após estes conflitos positivos nós, do
            time de alta performance, nos comprometemos com a decisão final,
            somos unidos e nos fortalecemos através de feedbacks mútuos.
            Queremos, e muito, o melhor uns dos outros, afinal somos
            verdadeiramente um time. Para calibrarmos se nosso time é “Fora da
            curva”, aplique esta pergunta sobre todos os membros do time: “se
            ele saísse do nosso time, o quanto eu tentaria convencê-lo de
            ficar?”. A mesma pergunta vale para você. Ao analisar as respostas
            cima, crie ações que fortaleça o time. Ensine algo de impacto, se
            preocupe e dedique tempo na formação dos zuppers. Mesmo um júnior
            deve ensinar algo de impacto para os especialistas e líder do time.
            Assuma abertamente seus pontos de melhoria, tanto na parte técnica
            quanto comportamental. Utilize o referencial da cultura, propósito e
            sonho para dar e ponderar os feedbacks.
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
