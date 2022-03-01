import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export const ClientIdComboBox = () => {
  return (
    <Autocomplete
      sx={{ marginBottom: "20px" }}
      options={["1", "2"]}
      renderInput={(params) => <TextField {...params} label="Client ID" />}
    />
  );
};
