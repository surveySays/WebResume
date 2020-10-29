import React, { Component, useState, useEffect } from "react";

//Material UI
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { Tooltip } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Divider from "@material-ui/core/Divider";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import WorkIcon from "@material-ui/icons/Work";
import BuildIcon from "@material-ui/icons/Build";
import ComputerIcon from "@material-ui/icons/Computer";
import CallIcon from "@material-ui/icons/Call";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

//Images
import FadeIn from "react-fade-in";

//Components
import SuccessAlert from "../SuccessAlert";
import { MessageForm } from "../Submission";

//Ionicons
import IosCallOutline from "react-ionicons/lib/IosCallOutline";
import IosPersonOutline from "react-ionicons/lib/IosPersonOutline";
import IosBriefcaseOutline from "react-ionicons/lib/IosBriefcaseOutline";
import IosBuildOutline from "react-ionicons/lib/IosBuildOutline";
import IosCloudDownloadOutline from "react-ionicons/lib/IosCloudDownloadOutline";
import IosLaptop from "react-ionicons/lib/IosLaptop";
import IosJetOutline from "react-ionicons/lib/IosJetOutline";
import LogoBuffer from "react-ionicons/lib/LogoBuffer";
import IosCode from "react-ionicons/lib/IosCode";
import IosPinOutline from "react-ionicons/lib/IosPinOutline";
import IosMailOutline from "react-ionicons/lib/IosMailOutline";

export class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMob: false,
      open: false,
      isDesktop: false,
      name: "",
      email: "",
      message: "",
      showAlert: false,
      emptyName: false,
      emptyEmail: false,
      emptyMessage: false,
      helpName: "",
      helpEmail: "",
      helpMessage: "",
    };

    this.Top = React.createRef();
    this.About = React.createRef();
    this.Projects = React.createRef();
    this.Skills = React.createRef();
    this.WorkHistory = React.createRef();
    this.Connect = React.createRef();
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 860 });
  }

  togglePopup() {
    this.setState({ form: true });
  }

  handleSumbit = (event) => {
    event.preventDefault();

    const formData = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    let errorCounter = 0;

    if (this.state.name == "") {
      this.setState({ emptyName: true, helpName: "Field must not be empty" });
      errorCounter = errorCounter + 1;
    } else {
      this.setState({ emptyName: false, helpName: "" });
    }

    if (
      this.state.email == "" ||
      this.emailIsValid(this.state.email) === false
    ) {
      this.setState({
        emptyEmail: true,
        helpEmail: "Field must not be empty or invalid email",
      });
      errorCounter = errorCounter + 1;
    } else {
      this.setState({ emptyEmail: false, helpEmail: "" });
    }

    if (this.state.message == "") {
      this.setState({
        emptyMessage: true,
        helpMessage: "Field must not be empty",
      });
      errorCounter = errorCounter + 1;
    } else {
      this.setState({ emptyMessage: false, helpMessage: "" });
    }

    if (errorCounter != 0) {
      return false;
    }

    this.setState({ emptyMessage: false, emptyEmail: false, emptyName: false });
    this.setState({ showAlert: true });
    this.setState({ name: "", email: "", message: "" });

    MessageForm(formData); //pass data to backend

    setTimeout(
      function () {
        this.setState({ showAlert: false });
      }.bind(this),
      5000
    );
  };

  emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const isDesktop = this.state.isDesktop;
    const isMob = this.state.isMob;

    const handleChange = (event, newValue) => {
      this.setState({ tab: newValue });
    };

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          overflowY: "scroll",
          color: "#000000",
          backgroundColor: "#1c1e1f",
          marginTop: "auto",
          marginBottom: "auto",
          padding: 20,
        }}
        className="scroll"
      >
        <FadeIn>
          <h1 style={{ fontSize: 55, color: "#FFFFFF", marginBottom: 30 }}>
            contact me
          </h1>

          <p style={{ color: "#9e9e9e", marginBottom: 20 }}>
            Just say hi! I am always working on new projects and I love hearing
            from anyone with tips, ideas, or if you want to collaborate on
            something cool. Feel free to fill out the form below to get in
            touch.
          </p>

          <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
            P.S., I also love hearing from employers!
          </p>
          <Divider style={{ backgroundColor: "#9e9e9e", marginBottom: 30 }} />

          <div
            style={{
              width: "100%",
              display: "flex",
              marginBottom: 10,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "auto",
                display: "flex",
                marginRight: 10,
                marginBottom: 10,
              }}
            >
              <IosMailOutline
                onClick={() => alert("Hi!")}
                fontSize="30px"
                color="#00C483"
              />
              <Typography
                style={{
                  color: "#FFFFFF",
                  fontSize: 16,
                  marginLeft: 8,
                  marginTop: 3,
                }}
              >
                brennboese@gmail.com
              </Typography>
            </div>
            <div
              style={{
                width: "auto",
                display: "flex",
                marginRight: 10,
                marginBottom: 10,
              }}
            >
              <IosCallOutline
                onClick={() => alert("Hi!")}
                fontSize="30px"
                color="#00C483"
              />
              <Typography
                style={{
                  color: "#FFFFFF",
                  fontSize: 16,
                  marginTop: 2,
                  marginLeft: 7,
                }}
              >
                (971) 388-0073
              </Typography>
            </div>
            <div style={{ width: "auto", display: "flex", marginRight: 10 }}>
              <IosPinOutline
                onClick={() => alert("Hi!")}
                fontSize="30px"
                color="#00C483"
              />
              <Typography
                style={{
                  color: "#FFFFFF",
                  fontSize: 16,
                  marginTop: 3,
                  marginLeft: 6,
                }}
              >
                Salem, Oregon
              </Typography>
            </div>
          </div>

          <Divider
            style={{
              backgroundColor: "#9e9e9e",
              marginBottom: 30,
              marginTop: 30,
            }}
          />
          <h1 style={{ fontSize: 34, color: "#FFFFFF", marginBottom: 20 }}>
            send message
          </h1>
          <TextField
            error={this.state.emptyName}
            required
            name="name"
            label="Name"
            type="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
            InputLabelProps={{ classes: { root: classes.textF } }}
            InputProps={{ className: classes.multilineColor }}
            className={classes.textF}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            required
            error={this.state.emptyEmail}
            autoComplete="email"
            value={this.state.email}
            onChange={this.handleChange}
            InputLabelProps={{ classes: { root: classes.textF } }}
            InputProps={{ className: classes.multilineColor }}
            className={classes.textF}
          />
          <TextField
            error={this.state.emptyMessage}
            id="message"
            label="Message"
            name="message"
            multiline
            value={this.state.message}
            onChange={this.handleChange}
            autoComplete="none"
            rows={4}
            InputLabelProps={{ classes: { root: classes.textF } }}
            InputProps={{ className: classes.multilineColor }}
            className={classes.textF}
          />

          <Button
            onClick={this.handleSumbit}
            style={{
              backgroundColor: "#00C483",

              "&:focus": {
                outline: "none",
              },
              "*:focus": {
                outline: "none",
              },
            }}
          >
            send message
          </Button>
          {this.state.showAlert ? (
            <SuccessAlert
              style={{ position: "fixed", bottom: 30, right: 30, zIndex: 10 }}
            />
          ) : null}
        </FadeIn>
      </div>
    );
  }
}

const useStyles = (theme) => ({
  black: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
  },
  border: {
    width: "90%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: "auto",
  },
  flex: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
  },
  picInfo: {
    position: "absolute",
    width: "100%",
    bottom: 10,
    textAlign: "center",
  },
  menu: {
    width: 80,
    height: "90%",
    backgroundColor: "#1c1e1f",
    marginTop: "auto",
    marginBottom: "auto",
  },

  info: {
    width: "calc(60% - 80px)",
    height: "90%",
    overflowY: "scroll",
    color: "#000000",
    backgroundColor: "#1c1e1f",
    marginTop: "auto",
    marginBottom: "auto",
    padding: 20,
  },
  menuIcon: {
    height: 80,
    width: 80,
    backgroundColor: "#00C483",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pdfIcon: {
    height: 80,
    width: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "5%",
  },
  alignIcons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "75%",
  },
  icons: {
    fill: "white",
    width: 35,
    height: 35,
  },
  textF: {
    width: "100%",
    color: "#9e9e9e",
    marginBottom: 20,
    "& label.Mui-focused": {
      color: "#00C483",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#00C483",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#9e9e9e",
    },
  },
  multilineColor: {
    color: "#00C483",
  },
  buttonShop: {
    "&:focus": {
      outline: "none",
    },
  },
});

export default withStyles(useStyles)(Contact);
