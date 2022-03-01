import React from "react";
import Box from "@mui/material/Box";
import { EntityComboBox } from "../EntityComboBox";

export const Modal: React.FC = () => {
  return (
    <Box width="30%" height="80vh">
      <EntityComboBox />
    </Box>
  );
};
