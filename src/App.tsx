import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Modal } from "./components/Modal";
import { Form } from "./components/Form";

const App = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Modal>
        <Form />
      </Modal>
    </Box>
  );
};

export default App;
