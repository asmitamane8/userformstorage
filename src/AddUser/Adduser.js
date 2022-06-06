import React, { useState } from "react";
import "./Adduser.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Adduser = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const user = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    //for checking user fill all fields or not
    if (!email || !firstname || !lastname || !contact) {
      return alert("Please fill in all fields!!");
    }

    const checkemail = user.filter(
      (users) => users.email === email ? user:null
    );
    const checkcontactno = user.filter(
      (users) => users.contact === contact?user:null
    );
    //for checking email already exists
    if (checkemail.length > 0) {
      return alert("This email already exists!!");
    }
    if (checkcontactno.length > 0) {
      return alert("This phone number already exists!!");
    }


    const data = {
      id: user.length > 0 ? user[user.length - 1].id + 1 : 0,
      firstname,
      lastname,
      email,
      contact,
    };
    dispatch({ type: "ADD_USERS", payload: data });
    alert("User added sucessfully");
    history.push("/");
  };
  
  return (
    <div>  
    <form onSubmit={handleSubmit}>
      <Paper elevation={4} sx={{ m: 2, p: 2 }}>
        <Typography variant="h5" sx={{ m: 2 }}>
          User Management
        </Typography>
      
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 2, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <TextField
                sx={{ width: "40ch" }}
                label="First Name"
                id="outlined-size-small"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
                name="fullName"
              />
              &nbsp;
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ width: "40ch" }}
                label="Last Name"
                name="address"
                id="outlined-size-normal"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ width: "40ch" }}
                label="Email ID"
                name="email"
                id="outlined-size-small"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              &nbsp;
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ width: "40ch" }}
                label="contact"
                id="outlined-size-normal"
                value={contact}
                onChange={(e) => setcontact(e.target.value)}
              />
            </Grid>
            <Grid item xs={14}>
              <Button
                variant="contained"
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Student"
              >
                Add User
              </Button>
            </Grid>
          </Grid>
        
      </Paper>
      </form>
    </div>
  );
};

export default Adduser;
