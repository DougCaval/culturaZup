import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea , CardActions, Button} from "@mui/material";

export default function CustomerLovers() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://lh3.googleusercontent.com/_o_DcAi39XTSHhim6_Wr79KJ-3Azm4a0truCu31fRruyeudDRiaLizwy_w-ym6m7A1USUMbZvNDYrd2-8KQnabiKfq-7jdQRjAqy13YXDOn5xaFZL4cJNanhuO-yS7of-w=w1280"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Somos Customer Lovers
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Somos apaixonados pelo cliente e juntos transformamos o futuro da tecnologia.
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
