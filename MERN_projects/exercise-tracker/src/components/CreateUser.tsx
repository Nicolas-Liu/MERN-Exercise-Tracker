import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const CreateUser = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="le-big-container">
        <div
          className="loggedTitle-container"
          style={{ marginTop: "1em", marginBottom: "5px" }}
        >
          <h2>Create a New User</h2>
        </div>
        <TextField
          id="filled-multiline-flexible"
          label="Username"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          variant="filled"
          style={{width: "30%"}}
        />
      </div>
      <div className="lower-user-container">
        <Button variant="contained">Create User</Button>
      </div>
    </>
  );
};

export default CreateUser;
