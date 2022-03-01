import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Modal } from "./components/Modal";

const App = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Modal />
      {/* <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
      </Grid> */}
    </Box>
  );
};

export default App;
