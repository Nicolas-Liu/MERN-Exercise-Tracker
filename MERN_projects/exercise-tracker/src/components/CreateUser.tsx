import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import Success from "./Success";

const CreateUser = () => {
  const [userName, setUserName] = useState<string>("");
  const [success, isSuccess] = useState<boolean>(false);

  const onChangeUserName = (e: any) => {
    setUserName(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("user: ", userName);
    const user = {
      username: userName,
    };
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log("Error in getting exercises ", error);
      });

    if (userName !== "") {
      setUserName("");
      isSuccess(true);
      setTimeout(() => {
        isSuccess(false);
      }, 2000);
    }
  };
  return (
    <>
      {success && <Success />}
      <form onSubmit={onSubmit}>
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
            value={userName}
            onChange={onChangeUserName}
            variant="filled"
            style={{ width: "30%" }}
          />
        </div>
        <div className="lower-user-container">
          <Button variant="contained" type="submit" value="Submit">
            Create User
          </Button>
        </div>
      </form>
    </>
  );
};

export default CreateUser;
