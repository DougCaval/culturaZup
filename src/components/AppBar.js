import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function CultureAppBar() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="relative"  >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Zup Pocket Culture
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}