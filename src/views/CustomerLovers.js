import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import customerlovers from "../img/customerlovers.png";
import SocialButtonGroup from "../components/Buttons";

export default function CustomerLovers() {
  return (
    <Grid container spacing={1} justifyContent="center" paddingTop="30px" paddingBottom="30px">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <img
            src={customerlovers}
            width="400px"
            height="300px"
            alt="Banner apresentado na ZupCon com o Texto :  Somos Customer lovers"
          ></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Customer Lovers
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Somos apaixonados pelo sucesso do cliente e juntos transformamos o futuro da
              tecnologia.
            </Typography>
          </CardContent>
          <CardActions>
            <SocialButtonGroup />
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
