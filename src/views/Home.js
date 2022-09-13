import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CultureItemsList from "../components/List";
import Grid from "@mui/system/Unstable_Grid/Grid";





export default function Home() {
  return (
    
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="relative" >
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Pocket Zup  Culture
          </Typography>
        </Toolbar>
      </AppBar>
        <Grid    container spacing={1} justifyContent="center" paddingTop="30px" paddingBottom="30px" >
      <CultureItemsList/>
      </Grid>
    </Box>
   
  );
}
