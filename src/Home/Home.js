import React from "react";
import "./Home.css";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const deleteuser = (id) => {
    dispatch({ type: "DELETE_USERS", payload: id });
    alert("User Removed sucessfully");
  };
  return (
    <div>
      <div>
        <Link to="/add" className="linktag">
          <Button sx={{m:1}}  variant="contained">Add User</Button>
        </Link>
        <div>
          <TableContainer component={Paper} className="paper">
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">Firstname</TableCell>
                  <TableCell align="center">Lastname</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Phone No</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
            
             {user.length>0 ? (
                user.map((users,id) => (
                  <TableRow key={id}>
                    <TableCell>{id + 1}</TableCell>
                    <TableCell align="center">{users.firstname}</TableCell>
                    <TableCell align="center">{users.lastname}</TableCell>
                    <TableCell align="center">{users.email}</TableCell>
                    <TableCell align="center">{users.contact}</TableCell>
                    <TableCell>
                      <Link to={`/edit/${users.id}`}  className="linktag"><EditIcon></EditIcon>EditContact</Link>
                    </TableCell>
                    <TableCell>
                      <button
                        type="button"
                        onClick={() => deleteuser(users.id)}
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))
                )
               : (
                <TableRow>
                  <TableCell>No record found</TableCell>
                </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Home;
