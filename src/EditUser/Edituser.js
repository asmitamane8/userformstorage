import React, { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";

const EditContact = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const dispatch = useDispatch();

  const { id } = useParams();
  const history = useHistory();
  const user = useSelector((state) => state);
  const currentusers = user.find((users) => users.id === parseInt(id));

  useEffect(() => {
    if (currentusers) {
      setfirstname(currentusers.firstname);
      setlastname(currentusers.lastname);
      setemail(currentusers.email);
      setcontact(currentusers.contact);
    }
  }, [currentusers]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //for checking user fill all fields or not
    if (!email || !firstname || !lastname || !contact) {
      return alert("Please fill in all fields!!");
    }
    const checkemail = user.filter((users) =>
      users.email === email ? user : null
    );
    const checkcontactno = user.filter((users) =>
      users.contact === contact ? user : null
    );
    //for checking email already exists
    if (checkemail.length > 0) {
      return alert("This email already exists!!");
    }
    if (checkcontactno.length > 0) {
      return alert("This phone number already exists!!");
    }

    const data = {
      id: currentusers.id,
      firstname,
      lastname,
      email,
      contact,
    };

    dispatch({ type: "UPDATE_USERS", payload: data });
    alert("User update sucessfully");
    history.push("/");
  };

  return (
    <div>
      {currentusers ? (
        <Paper elevation={4} sx={{ m: 2, p: 2 }}>
          <Typography variant="h5" sx={{ m: 2 }}>
            User Management
          </Typography>
          <form onSubmit={handleSubmit}>
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
            </Grid>
            <input
              className="btn btn-block btn-dark"
              type="submit"
              value="Add Student"
            />
          </form>
        </Paper>
      ) : (
        <h1>User with id {id} is not exists</h1>
      )}
    </div>
  );
};

export default EditContact;
