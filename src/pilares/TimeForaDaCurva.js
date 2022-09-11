import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function TimeForaDaCurva() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://lh3.googleusercontent.com/1z2EegjgAXEx0QY1jUiY4TVF6_PxpSJ3TENBMli8Qi4-wClBuCWkLICcvarSOEJoncvMhdMazmm35bU8LOTbx4tIlOtSId87gBi-d7CtWlRm25z5XR6ZhebFFKczQSMDmQ=w1280"
          alt="green iguana"
        />
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
      </CardActionArea>
    </Card>
  );
}
