import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/system/Unstable_Grid/Grid";


import aprendizadoacimadoplano from "../img/aprendizadoacimadoplano.png";
import customerlovers from "../img/customerlovers.png"
import erreondeninguemerrou from "../img/erreondeninguemerrou.png"
import propositodecide from "../img/propositodecide.png"
import resolvaoproblemacerto from "../img/resolvaoproblemacerto.png"
import respeitoeinclusao from "../img/respeitoeinclusao.png"
import sejaautenticoseexponha from "../img/sejaautenticoseexponha.png"
import sejatransformador from "../img/sejatransformador.png"
import somoscolaborativos from "../img/somoscolaborativos.png"
import somosguardioes from "../img/somosguardioes.png"
import somosnerds from "../img/somosnerds.png"
import timeforadacurva from "../img/timeforadacurva.png"
import vaiquedaconfia from "../img/vaiquedaconfia.png"
import zupperajudazupper from "../img/zupperajudazupper.png"



import { Button } from "@mui/material";

export default function CultureItemsList() {
  return (
    <List sx={{ width: "100%", maxWidth: 800, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar >
          <Avatar alt="Aprendizado acima do plano" >
            <img
              src={aprendizadoacimadoplano}
              
              width="40px"
              height="40px"
              alt="imagem ícone de um notebook aberto e o ícone de uma mulher apontando para um gráfico"
            ></img>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Aprendizado acima do plano"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {
                " Quem aprende mais rápido está a frente do mercado. Pense freneticamente…"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Grid container spacing={1} justifyContent="flex-end" paddingTop="30px" paddingBottom="30px">
      <Button
        variant="contained"
        aria-label="Botão enviar pelo Whatsapp"
        color="primary"
        href="/aprendizadoacimadoplano"
        
      >
        Saber mais
      </Button>

      </Grid>
      

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Somos Customer Lovers">
            <img
              src={customerlovers}
              width="40px"
              height="40px"
              alt="imagem ícone de um notebook aberto e o ícone de uma mulher apontando para um gráfico"
            ></img>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="somos customer lovers"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              
              </Typography>
              {
                " Somos apaixonados pelo sucesso do cliente e juntos transformamos o futuro…"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Grid container spacing={1} justifyContent="flex-end" paddingTop="30px" paddingBottom="30px">
      <Button
        variant="contained"
        aria-label="Botão enviar pelo Whatsapp"
        color="primary"
        href="/customerlovers"
      >
        Saber mais
      </Button>
      </Grid>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Erre onde ninguém errou">
          <img
          src={erreondeninguemerrou}
          width="40px"
          height="40px"
          alt="Imagem com o ícone de um homem segurando o componente de desenvolviemnto na frente de um monitor com uma aplicação na tela "
        ></img>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="erre onde ninguém errou"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {
                " Se você errar onde ninguém errou, parabéns, você acabou de tentar o que ninguém…"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Grid container spacing={1} justifyContent="flex-end" paddingTop="30px" paddingBottom="30px">
      <Button
        variant="contained"
        aria-label="Botão enviar pelo Whatsapp"
        color="primary"
        href="/erreondeninguemerrou"
      >
        Saber mais
      </Button></Grid>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="O propósito decide">
          <img src={propositodecide} width="40px" height="40px" alt="'Ícone de um home olhando para o alto de uma montanha com uma luneta, no alto da montanha tem uma bandeira verde'"></img>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="O propósito decide"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {
                "Sempre opte por ações que transformem nosso propósito em realidade…"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Grid container spacing={1} justifyContent="flex-end" paddingTop="30px" paddingBottom="30px">
      <Button
        variant="contained"
        aria-label="Botão enviar pelo Whatsapp"
        color="primary"
        href="/propositodecide"
      >
        Saber mais
      </Button></Grid>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Resolva o problema certo">
          <img
          src={resolvaoproblemacerto}
          width="40px"
          height="40px"
          alt="Um ícone de uma home e um ícone de uma mulher frente a um poste com três placas sinalizando caminhos diferentes"
        ></img>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Resolva o problema certo"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              
              </Typography>
              {
                "Estou resolvendo o problema certo? O Zupper faz esta pergunta todos os dias. Nosso impacto está relacionado…"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Grid container spacing={1} justifyContent="flex-end" paddingTop="30px" paddingBottom="30px">
      <Button
        variant="contained"
        aria-label="Botão enviar pelo Whatsapp"
        color="primary"
        href="/resolvaoproblemacerto"
      >
        Saber mais
      </Button></Grid>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Respeito e inclusão">
          <img
          src={respeitoeinclusao}
          width="40px"
          height="40px"
          alt="'cones de vários pessoas de diferentes raças, nacionalidades todas juntas formando um grupo único'"
        ></img>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Respeito e inclusão"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {
                "Na Zup acreditamos que todos devem ter espaço, voz, escolha e progresso. Escute atentamente seus pares, líderes e liderados…"
                
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Grid container spacing={1} justifyContent="flex-end" paddingTop="30px" paddingBottom="30px">
      <Button
        variant="contained"
        aria-label="Botão enviar pelo Whatsapp"
        color="primary"
        href="/respeitoeinclusao"
      >
        Saber mais
      </Button></Grid>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Seja autêntico, se exponha">
          <img
          src={sejaautenticoseexponha}
          width="40px"
          height="40px"
          alt="Ícone de um homem usando uma capa vermelha frente ao desenho de uma seta laranja que passa por baixo e aponta para cima no seu final"
        ></img>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Seja autêntico , se exponha "
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {
                "Somos autênticos valorizamos a nossa essência. Por isso, não se omita, expresse suas opiniões e ideias…"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Grid container spacing={1} justifyContent="flex-end" paddingTop="30px" paddingBottom="30px">
      <Button
        variant="contained"
        aria-label="Botão enviar pelo Whatsapp"
        color="primary"
        href="/sejaautenticoseexponha"
      >
        Saber mais
      </Button></Grid>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Seja transformador">
          <img
          src={sejatransformador}
          width="40px"
          height="40px"
          alt="Ícone de um home e uma mulher frente a um quadro com o desneho de uma cabeça humana verde com o desenho de uma lâmpada em cima'"
        ></img>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Seja transformador "
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {
                "O todo é maior do que a soma das partes. O transformador está conectado ao objetivo final no qual seu time está trabalhando…"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Grid container spacing={1} justifyContent="flex-end" paddingTop="30px" paddingBottom="30px">
      <Button
        variant="contained"
        aria-label="Botão enviar pelo Whatsapp"
        color="primary"
        href="/sejatransformador"
      >
        Saber mais
      </Button></Grid>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Somos colaborativos">
          <img
          src={somoscolaborativos}
          width="40px"
          height="40px"
          alt="Ícone de quatro pessoas ao redor de uma pesa com balões de pensamentos discutindo e falando a repseito de idéias"
        ></img>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Somos colaborativos "
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               
              </Typography>
              {
                "Tão importante quanto criar, é adotar boas soluções e por fim co-criar soluções ainda melhores…"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Grid container spacing={1} justifyContent="flex-end" paddingTop="30px" paddingBottom="30px">
      <Button
        variant="contained"
        aria-label="Botão enviar pelo Whatsapp"
        color="primary"
        href="/somoscolaborativos"
      >
        Saber mais
      </Button></Grid>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Somos guardiões">
          <img
          src={somosguardioes}
          width="40px"
          height="40px"
          alt="Ícone de duas pessoas em poisção de mdeitação e simbolos : escudo, logo da zup e cadeado sobre suas cabeças'"
        ></img>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Somos guardiões "
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {
                "Sabemos da responsabilidade que é ter nossos produtos e serviços consumidos por milhões de pessoas…"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Grid container spacing={1} justifyContent="flex-end" paddingTop="30px" paddingBottom="30px">
      <Button
        variant="contained"
        aria-label="Botão enviar pelo Whatsapp"
        color="primary"
        href="/somosguardioes"
      >
        Saber mais
      </Button></Grid>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Somos nerds">
          <img
          src={somosnerds}
          width="40px"
          height="40px"
          alt="'cone de pessoas em diferentes sittuações mas que exigem um conhecimento intelectual na execução das atividades'"
        ></img>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Somos nerds "
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {
                "O nível técnico tem uma relação direta com a qualidade, eficiência e velocidade do que entregamos…"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Grid container spacing={1} justifyContent="flex-end" paddingTop="30px" paddingBottom="30px">
      <Button
        variant="contained"
        aria-label="Botão enviar pelo Whatsapp"
        color="primary"
        href="/somosnerds"
      >
        Saber mais
      </Button></Grid>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Time fora da Curva">
          <img
          src={timeforadacurva}
          width="40px"
          height="40px"
          alt="Ícone mostrando algumas pessoas levantando um gráfico frente a um programa de computador com engrenagens e formulários simulando uma dashboard"
        ></img>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Time fora da curva"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {
                "Uma variável crítica do crescimento exponencial é trabalhar com pessoas tão boas ou melhores que …"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Grid container spacing={1} justifyContent="flex-end" paddingTop="30px" paddingBottom="30px">
      <Button
        variant="contained"
        aria-label="Botão enviar pelo Whatsapp"
        color="primary"
        href="/timeforadacurva"
      >
        Saber mais
      </Button></Grid>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Vai que dá, confia!">
          <img
          src={vaiquedaconfia}
          width="40px"
          height="40px"
          alt="Ícone de uma mulher sentada em um foguete que está en ascenção , segurando uam bandeira verde na mão direita"
        ></img>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Vai que dá, confia!"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {
                "Acredite e ande pra frente. Confiamos na inteligência coletiva ao discutir problemas em grupo…"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Grid container spacing={1} justifyContent="flex-end" paddingTop="30px" paddingBottom="30px">
      <Button
        variant="contained"
        aria-label="Botão enviar pelo Whatsapp"
        color="primary"
        href="/vaiquedaconfia"
      >
        Saber mais
      </Button></Grid>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Zupper ajuda zupper">
          <img
          src={zupperajudazupper}
          width="40px"
          height="40px"
          alt="Ícone de duas pessoas juntas montando um quebra cabeça '"
        ></img>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Zupper ajuda zupper"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {
                "Diz o provérbio africano : Se quer ir rápido, vá sozinho. Se quer ir longe, vá em grupo…"
                
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Grid container spacing={1} justifyContent="flex-end" paddingTop="30px" paddingBottom="30px">
      <Button
        variant="contained"
        aria-label="Botão enviar pelo Whatsapp"
        color="primary"
        href="/zupperajudazupper"
      >
        Saber mais
      </Button></Grid>

      <Divider variant="inset" component="li" />
    </List>
  );
}
