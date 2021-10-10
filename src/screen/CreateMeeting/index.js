import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Typography } from "@mui/material";

const CreateMeeting = () => {
  makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(10)
      },
    },
    title: {
      fontWeight: "800",
      color: "red",
    },
  }));

  const classes = makeStyles();
  return (
    <Container maxWidth="false">
      <Typography variant="h6" className={classes.title}>
        Create Meeting
      </Typography>
    </Container>
  );
};

export default CreateMeeting;
