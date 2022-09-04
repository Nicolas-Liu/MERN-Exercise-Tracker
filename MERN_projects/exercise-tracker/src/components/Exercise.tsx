import { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import axios from "axios";
import Success from "./Success";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Exercise = () => {
  const [userName, setUserName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [duration, setDuration] = useState<number>(0);
  const [users, setUsers] = useState<any>([]);
  const [dateValue, setDateValue] = useState<Date | null>(new Date());
  const [success, isSuccess] = useState<boolean>(false);

  const onChangeUserName = (e: any) => {
    setUserName(e.target.value);
  };
  const onChangeDescription = (e: any) => {
    setDescription(e.target.value);
  };
  const onChangeDuration = (e: any) => {
    setDuration(e.target.value);
  };

  const onChangeUsers = (e: any) => {
    setUsers(e.target.value);
  };

  const handleDateChange = (newValue: Date | null) => {
    setDateValue(newValue);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    const exercise = {
      username: userName,
      description: description,
      duration: duration,
      date: dateValue,
    };

    if (userName !== "" && description !== "" && duration > 0) {
      setUserName("");
      setDescription("");
      setDuration(0);
      setDateValue(new Date());
      isSuccess(true);
      setTimeout(() => {
        isSuccess(false);
      }, 2000);
    }

    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data));

    // window.location.href = '/log'
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          setUsers({
            users: response.data.map(
              (user: { username: string }) => user.username
            ),
            username: response.data[0].username,
          });
        }
      })
      .catch((error) => {
        console.log("Error in getting users ", error);
      });
  }, [users]);

  return (
    <>
      {success && <Success />}
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="le-big-container">
          <div
            className="loggedTitle-container"
            style={{ marginTop: "1em", marginBottom: "5px" }}
          >
            <h2>Create a New Exercise Log</h2>
          </div>

          <div className="input-container">
            <div className="input-spacing">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">User</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userName}
                  label="Age"
                  onChange={onChangeUserName}
                >
                  {users.users && users.users.map((item:any, key:number)=>{
                    return(
                      <MenuItem value={item} key={key}>{item}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </div>
            <div className="input-spacing">
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                className="input-spacing"
                type="text"
                value={description}
                onChange={onChangeDescription}
              />
            </div>

            <div className="input-spacing">
              <TextField
                id="outlined-basic"
                label="Duration (in minutes)"
                variant="outlined"
                type="number"
                value={duration}
                onChange={onChangeDuration}
              />
            </div>

            <div className="input-spacing">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="Date desktop"
                  inputFormat="MM/dd/yyyy"
                  value={dateValue}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
        <div className="lower-user-container">
          <Button variant="contained" type="submit">
            Add Exercise
          </Button>
        </div>
      </form>
    </>
  );
};

export default Exercise;
