import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";

const LoggedExercise = () => {
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

  function createData(
    name: string,
    Description: string,
    Duration: number,
    Date: any,
    Actions: any
  ) {
    return {
      name,
      calories: Description,
      fat: Duration,
      carbs: Date,
      protein: Actions,
    };
  }
  const currentTime = new Date().toISOString();
  const rows = [
    createData("Nicolas", "Bike ride", 60, currentTime, 4.0),
    createData("Nicolas", "Run", 90, currentTime, 4.3),
    createData("Nicolas", "Boxing", 60, currentTime, 6.0),
    createData("Nicolas", "Boxing", 30, currentTime, 4.3),
    createData("Nicolas", "Boxing", 100, currentTime, 3.9),
  ];

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
                <StyledTableCell>Username</StyledTableCell>
                <StyledTableCell align="right">Description</StyledTableCell>
                <StyledTableCell align="right">Duration</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
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
