import React from "react";
import TextField from "@mui/material/TextField";

interface IProps {
  label: string;
  mb: number;
}

export const NameControl: React.FC<IProps> = ({ label, mb = 0 }) => {
  return (
    <TextField
      sx={{ marginBottom: `${mb}px` }}
      id="outlined-basic"
      label={label}
      variant="outlined"
    />
  );
};
