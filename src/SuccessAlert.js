import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 30,
    right: 30,
    zIndex: 10,
  },
}));

export default function SuccessAlert() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="success">
        <AlertTitle>Message Sent</AlertTitle>
        Thanks! I will respond to your message as soon as I can
      </Alert>
    </div>
  );
}
