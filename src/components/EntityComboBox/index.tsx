import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import data from "../../data/data.json";
import Autocomplete from "@mui/material/Autocomplete";

export const EntityComboBox: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Autocomplete
      options={data.map(({ id, label }) => label)}
      renderInput={(params) => <TextField {...params} label="Entity" />}
      //   PopperComponent={<Button variant="text">add new position</Button>}
    />
  );
};
