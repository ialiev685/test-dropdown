import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { EntityComboBox } from "../EntityComboBox";
import { ClientIdComboBox } from "../ClientIdComboBox";
import { NameControl } from "../NameControl";

export const Form = () => {
  const [showTypeEntity, setShowTypeEntity] = useState<string>("Company");

  return (
    <FormControl sx={{ width: "100%" }}>
      <EntityComboBox value={showTypeEntity} onChange={setShowTypeEntity} />
      <ClientIdComboBox />
      {showTypeEntity === "Company" ? (
        <NameControl mb={20} label={"Company Name"} />
      ) : (
        <>
          <NameControl mb={20} label={"First Name"} />
          <NameControl mb={20} label={"Last Name"} />
        </>
      )}
    </FormControl>
  );
};
