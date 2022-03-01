import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import data from "../../data/data.json";
import Autocomplete from "@mui/material/Autocomplete";

interface IProps {
  onChange: (value: string) => void;
  value: string;
}

export const EntityComboBox: React.FC<IProps> = ({ onChange, value }) => {
  return (
    <>
      <InputLabel id="select-label">Entity</InputLabel>
      <Select
        sx={{ marginBottom: "20px" }}
        labelId="select-label"
        id="demo-simple-select"
        value={value}
        label="Entity"
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value={"Individual"}>Individual</MenuItem>
        <MenuItem value={"Company"}>Company</MenuItem>
      </Select>
    </>
  );
};
