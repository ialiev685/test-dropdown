import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Modal: React.FC = ({ children }) => {
  return (
    <Box width="30%" height="80vh">
      <Typography variant="h3" component="h3">
        Add
      </Typography>
      {children}
    </Box>
  );
};
