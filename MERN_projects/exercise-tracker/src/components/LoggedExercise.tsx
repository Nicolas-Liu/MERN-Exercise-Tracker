import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import axios from "axios";

const LoggedExercise = () => {
  const [exercises, setExercises] = useState<any[]>([]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const getExercises = () => {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => {
        console.log("exercises", response.data);
        setExercises(response.data);
      })
      .catch((error) => {
        console.log("Error in getting exercises ", error);
      });
  };
  useEffect(() => {
    getExercises();
    let getExerciseTimer = setInterval(() => {
      getExercises();
    }, 10000);
    return () => clearInterval(getExerciseTimer);
  }, []);

  const deleteExercise = (id: any) => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((response) => {
        response.data.filter((el:any) => el._id !== id);
      })
      .catch((error) => {
        console.log("Error in deleting exercise ", error);
      });
  };
  function capitalizeFirstLetter(string:any) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <div className="le-big-container">
        <div
          className="loggedTitle-container"
          style={{ marginTop: "1em", marginBottom: "8px" }}
        >
          <h3>Logged Exercises</h3>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>User</StyledTableCell>
                <StyledTableCell align="right">Description</StyledTableCell>
                <StyledTableCell align="right">Duration</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exercises.map((row, _id) => (
                <StyledTableRow key={_id}>
                  <StyledTableCell component="th" scope="row">
                    {capitalizeFirstLetter(row.username)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {capitalizeFirstLetter(row.description)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.duration}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.updatedAt}
                  </StyledTableCell>

                  <StyledTableCell
                    onClick={deleteExercise}
                    style={{ color: "blue", cursor: "pointer" }}
                    align="right"
                  >
                    Delete
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="bottom-page-container">
          <Pagination count={10} color="primary" />
        </div>
      </div>
    </>
  );
};

export default LoggedExercise;

