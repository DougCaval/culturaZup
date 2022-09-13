import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea , CardActions} from "@mui/material";
import SocialButtonGroup from "../components/Buttons";
import somosguardioes from "../img/somosguardioes.png"
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Button } from "@mui/material";

export default function SomosGuardioes() {
  return (
    <Grid container spacing={1} justifyContent="center" paddingTop="30px" paddingBottom="30px">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img
          src={somosguardioes}
          width="400px"
          height="300px"
          alt="Ícone de duas pessoas em poisção de mdeitação e simbolos : escudo, logo da zup e cadeado sobre suas cabeças'"
        ></img>
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
       <SocialButtonGroup/>
       <Button variant="contained" aria-label="Botão voltar para home" color="warning" href="/">Voltar</Button>
      </CardActions>
      </CardActionArea>
    </Card>
    </Grid>
  );
}
