import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const Exercise = () => {
  const [value, setValue] = React.useState("");
  const [dateValue, setDateValue] = React.useState<Date | null>(
    new Date()
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleDateChange = (newValue: Date | null) => {
    setDateValue(newValue);
  };
  return (
    <>
      <div className="le-big-container">
        <div
          className="loggedTitle-container"
          style={{ marginTop: "1em", marginBottom: "5px" }}
        >
          <h2>Create a New Exercise Log</h2>
        </div>
        <div className="input-container">
          <div className="input-spacing">
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
          </div>
          <div className="input-spacing">
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              className="input-spacing"
            />
          </div>

          <div className="input-spacing">
            <TextField
              id="outlined-basic"
              label="Duration (in minutes)"
              variant="outlined"
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
        <Button variant="contained">Add Exercise</Button>
      </div>
    </>
  );
};

export default Exercise;
