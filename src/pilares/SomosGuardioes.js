import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea , CardActions, Button} from "@mui/material";

export default function SomosGuardioes() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://lh4.googleusercontent.com/yTHKzFB1zNHX7nJDA4dcNM2mx0kNvrLYk2bns4qXpc7LF0YRf6AcdgN37x2RX1rgQkRvgyVbV1kjOlB8LWpyxkdtlkWRkCDUf6O_ew4Af0WzF9qZbb9e46StGxswx1NPQQ=w1280"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Somos Guardiões
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sabemos da responsabilidade que é ter nossos produtos e serviços
            consumidos por milhões de pessoas, com movimentações de centenas de
            bilhões de reais. Tratamos o tema de segurança com a seriedade que o
            assunto exige. Por isso, tudo que fazemos é confiável e seguro.
            Valorizamos, respeitamos e protegemos os nossos ambientes, acessos,
            aplicações e dados de clientes e seus usuários. Sempre que implantar
            uma melhoria com foco em aumentar a segurança, resiliência e
            confiança das aplicações e ambientes de forma corporativa, respeite
            uma incrível developer experience e a velocidade em colocar ideias
            em produção. Acreditamos e garantimos que nosso time segue a risca
            as orientações que temos nos nossos princípios de segurança. Link de
            acesso!
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
