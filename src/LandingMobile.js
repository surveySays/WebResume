import React, { Component } from "react";
import "./App.css";

//Material UI
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Tooltip } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";

//Images
import resumepic from "./resumepic.png";
import coding from "./coding.jpg";
import BarrelCash from "./BarrelCash.png";
import DogBearGames from "./DogBearGames.png";
import adaptMi from "./adaptMi.png";
import Balloon from "./Arch.jpg";
import Watch from "./Watch.jpg";
import Idea from "./Idea.jpg";
import iPhone from "./iPhone.jpg";

//npmjs
import FadeIn from "react-fade-in";
import { BrowserView, MobileView } from "react-device-detect";

//react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

//Components
import SuccessAlert from "./SuccessAlert";
import { MessageForm } from "./Submission";

const useStyles = (theme) => ({
  top: {
    backgroundImage: `url(${resumepic})`,
    backgroundSize: "cover",
    backgroundAttachment: "absolute",
    backgroundPosition: "center",
    position: "relative",
    width: "100%",
    height: "100%",
    minHeight: 346,
  },
  section: {
    height: "auto",
    width: "100%",
    position: "relative",
    backgroundColor: "#ffffff",
  },
  coding: {
    backgroundImage: `url(${coding})`,
    backgroundSize: "cover",
    backgroundAttachment: "absolute",
    position: "relative",
    width: "100%",
    height: 500,
  },
  mountain: {
    backgroundImage: `url(${Balloon})`,
    backgroundSize: "cover",
    backgroundAttachment: "absolute",
    position: "relative",
    width: "100%",
    height: 500,
    fontSize: 0,
  },
  watch: {
    backgroundImage: `url(${Watch})`,
    backgroundSize: "cover",
    backgroundAttachment: "absolute",
    position: "relative",
    width: "100%",
    height: 500,
    fontSize: 0,
  },
  idea: {
    backgroundImage: `url(${Idea})`,
    backgroundSize: "cover",
    backgroundAttachment: "absolute",
    position: "relative",
    width: "100%",
    height: 500,
    fontSize: 0,
  },
  row: {
    display: "flex",
    marginTop: "35px",
  },
  column: {
    width: "33.33%",
    paddingRight: "25px",
  },
  list: {
    fontSize: 20,
    lineHeight: 3,
    color: "#ffffff",
    fontFamily: "Montserrat",
  },
  listSmall: {
    fontSize: 15,
    lineHeight: 3,
    color: "#ffffff",
    fontFamily: "Montserrat",
    marginLeft: 0,
    paddingLeft: 15,
  },
  submit: {
    marginTop: 20,
  },
  columnPhone: {
    paddingRight: "20px",
    marginBottom: "80px",
  },
});

export class LandingMobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    this.setState({ isDesktop: window.innerWidth > 699 });
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

  handleOnClickTop = (event) => {
    //.current is verification that your element has rendered
    this.setState({
      open: false,
    });

    if (this.Top.current) {
      this.Top.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  handleOnClickAbout = (event) => {
    //.current is verification that your element has rendered

    if (this.About.current) {
      this.About.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  handleOnClickProjects = (event) => {
    //.current is verification that your element has rendered

    if (this.Projects.current) {
      this.Projects.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  handleOnClickSkills = (event) => {
    //.current is verification that your element has rendered

    if (this.Skills.current) {
      this.Skills.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  handleOnClickWorkHistory = (event) => {
    //.current is verification that your element has rendered

    if (this.WorkHistory.current) {
      this.WorkHistory.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  handleOnClickConnect = (event) => {
    //.current is verification that your element has rendered

    event.preventDefault();

    if (this.Connect.current) {
      this.Connect.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    this.handleClose();
  };

  handleMenu = (event) => {
    event.preventDefault();
    this.setState({
      open: !this.state.open,
    });
  };

  handleClose = (event) => {
    event.preventDefault();
    this.setState({
      open: false,
    });
  };

  render() {
    const { classes } = this.props;
    const isDesktop = this.state.isDesktop;

    const handleChange = (event, newValue) => {
      this.setState({ tab: newValue });
    };

    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          overflowY: "scroll",
        }}
        className="scroll"
      >
        <div className={classes.top} ref={this.Top}>
          <h1
            style={{
              position: "absolute",
              left: 40,
              bottom: 20,
              fontSize: 50,
              fontFamily: "Montserrat",
            }}
          >
            <FadeIn>Brennen Boese</FadeIn>
          </h1>
        </div>

        <div className={classes.section} ref={this.About}>
          <div style={{ margin: 40 }}>
            {/* <Badge
              overlap="circle"
              style={{ position: "absolute", right: 46, top: 10 }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              badgeContent={
                <Tooltip title="Back to top" placement="top">
                  <Button onClick={this.handleOnClickTop}>
                    <ArrowUpwardIcon />
                  </Button>
                </Tooltip>
              }
            ></Badge> */}

            <h1 style={{ fontFamily: "Montserrat" }}>About</h1>

            <p style={{ fontFamily: "Montserrat" }}>
              Dont feel like scrolling through this whole website? Open my PDF
              resume{" "}
              <a href={"/BrennenResume.pdf"} target="_blank">
                here.
              </a>
            </p>

            <p style={{ fontFamily: "Montserrat" }}>
              <b>Hi</b>, my name is Brennen. I am an undergraduate at Oregon
              Institute of Technology and I am majoring in{" "}
              <b>Software Engineering Technology</b>. I specialize in Front-End
              dynamic web development with React.js, CSS/JSX, and HTML.{" "}
              <b>I am seeking</b> my first full-time position as a software
              engineer/developer working with either back-end or front-end code.
            </p>
            <p style={{ fontFamily: "Montserrat" }}>
              I am currently working full-time as a Bridge Drafter for a company
              throughout the Pacific North West. They specialize in roadway,
              bridge, structural and marine practice area engineering working
              with multiple clients.
            </p>
            <p style={{ fontFamily: "Montserrat" }}>
              My passion for work is to become a full-time software
              developer/engineer. I enjoy front-end development but also
              appreciate and am always willing to learn new things. I am
              constanty working on side projects including web apps, iOS/android
              apps using React Native, and keeping my skills sharp with C++ &
              JavaScript algorithms.
            </p>
          </div>
        </div>
        <div className={classes.coding}></div>
        <div className={classes.section} ref={this.Projects}>
          <div
            style={{
              position: "relative",

              margin: 40,
            }}
          >
            {/* <Badge
              overlap="circle"
              style={{ position: "absolute", right: 5, top: 10 }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              badgeContent={
                <Tooltip title="Back to top" placement="top">
                  <Button onClick={this.handleOnClickTop}>
                    <ArrowUpwardIcon />
                  </Button>
                </Tooltip>
              }
            ></Badge> */}
            <h1 style={{ fontFamily: "Montserrat" }}>Projects</h1>
            <Typography
              component="h1"
              variant="h6"
              style={{ maxWidth: "400px", fontFamily: "Montserrat" }}
            >
              These are some of my past or current projects. I always like to be
              coding to stay sharp with my skills.
            </Typography>
            {isDesktop ? (
              <div className={classes.row}>
                <div className={classes.column}>
                  {
                    <img
                      src={adaptMi}
                      alt=""
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        maxHeight: 231,
                      }}
                    />
                  }
                  <h1 style={{ fontFamily: "Montserrat" }}>adaptMi</h1>
                  <p style={{ maxWidth: "450px", fontFamily: "Montserrat" }}>
                    A web application that my Junior Project team and I are
                    currently working on. This application mimics Discord and
                    Omegle allowing you to chat anonymously with people with
                    similar interest.
                  </p>
                  <a
                    href="https://adaptmi.io/"
                    target="_blank"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    adaptMi
                  </a>
                </div>
                <div className={classes.column}>
                  {
                    <img
                      src={BarrelCash}
                      alt=""
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        maxHeight: 231,
                      }}
                    />
                  }
                  <h1 style={{ fontFamily: "Montserrat" }}>Barrel Cash Web</h1>
                  <p style={{ maxWidth: "450px", fontFamily: "Montserrat" }}>
                    A web application that I am working on to show off games
                    that I am going to be making using Unity for the IOS app
                    store.
                  </p>
                  <a
                    href="https://barrel-cash-web.web.app/"
                    target="_blank"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Barrel Cash Web
                  </a>
                </div>
                <div className={classes.column} style={{ paddingRight: 0 }}>
                  {
                    <img
                      src={iPhone}
                      alt=""
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        maxHeight: 231,
                      }}
                    />
                  }
                  <h1 style={{ fontFamily: "Montserrat" }}>Barrel Cash App</h1>
                  <p style={{ maxWidth: "450px", fontFamily: "Montserrat" }}>
                    A phone budgeting application that I am working on for the
                    iOS App Store & Android Play Store.
                  </p>
                  <p>Coming Soon</p>
                </div>
              </div>
            ) : (
              <div>
                <div className={classes.columnPhone}>
                  {
                    <img
                      src={adaptMi}
                      alt=""
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        maxHeight: 231,
                        marginTop: 40,
                      }}
                    />
                  }
                  <h1 style={{ fontFamily: "Montserrat" }}>adaptMi</h1>
                  <p style={{ fontFamily: "Montserrat" }}>
                    A web application that my Junior Project team and I are
                    currently working on. This application mimics Discord and
                    Omegle allowing you to chat anonymously with people with
                    similar interest.
                  </p>
                  <a
                    href="https://adaptmi.io/"
                    target="_blank"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    adaptMi
                  </a>
                </div>
                <div className={classes.columnPhone}>
                  {
                    <img
                      src={BarrelCash}
                      alt=""
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        maxHeight: 231,
                      }}
                    />
                  }
                  <h1 style={{ fontFamily: "Montserrat" }}>Barrel Cash Web</h1>
                  <p style={{ fontFamily: "Montserrat" }}>
                    A web application that I am working on to show off games
                    that I am going to be making using Unity for the IOS app
                    store.
                  </p>
                  <a
                    href="https://barrel-cash-web.web.app/"
                    target="_blank"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Barrel Cash Web
                  </a>
                </div>
                <div
                  className={classes.columnPhone}
                  style={{ paddingRight: 0 }}
                >
                  {
                    <img
                      src={iPhone}
                      alt=""
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        maxHeight: 231,
                      }}
                    />
                  }
                  <h1 style={{ fontFamily: "Montserrat" }}>Barrel Cash App</h1>
                  <p style={{ fontFamily: "Montserrat" }}>
                    A phone budgeting application that I am working on for the
                    iOS App Store & Android Play Store.
                  </p>
                  <p>Coming Soon</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={classes.mountain}></div>
        <div
          className={classes.section}
          ref={this.Skills}
          style={{ backgroundColor: "#000000" }}
        >
          <div style={{ padding: 40 }}>
            {/* <Badge
              overlap="circle"
              style={{ position: "absolute", right: 46, top: 40 }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              badgeContent={
                <Tooltip title="Back to top" placement="top">
                  <Button onClick={this.handleOnClickTop}>
                    <ArrowUpwardIcon style={{ color: "#ffffff" }} />
                  </Button>
                </Tooltip>
              }
            ></Badge> */}
            <h1
              style={{ color: "#ffffff", margin: 0, fontFamily: "Montserrat" }}
            >
              Skills
            </h1>
            {isDesktop ? (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <ul className={classes.list}>
                  <li>Github</li>
                  <li>Gitbash</li>
                  <li>Azure/DevOps</li>
                  <li>C++</li>
                </ul>
                <ul className={classes.list}>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS/JSX</li>
                  <li>React.js</li>
                </ul>
                <ul className={classes.list}>
                  <li>React Native</li>
                  <li>Dynamic Web Development</li>
                  <li>SQL/T-SQL</li>
                  <li>NoSQL</li>
                </ul>
                <ul className={classes.list} style={{ marginRight: 16 }}>
                  <li>Rest API</li>
                  <li>Cloud Functions</li>
                  <li>Teamwork</li>
                  <li>Individual Work</li>
                </ul>
              </div>
            ) : (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <ul className={classes.listSmall}>
                  <li>Github</li>
                  <li>Gitbash</li>
                  <li>Azure/DevOps</li>
                  <li>C++</li>
                  <li>React Native</li>
                  <li>Dynamic Web Development</li>
                  <li>SQL/T-SQL</li>
                  <li>NoSQL</li>
                </ul>
                <ul className={classes.listSmall}>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS/JSX</li>
                  <li>React.js</li>
                  <li>Rest API</li>
                  <li>Cloud Functions</li>
                  <li>Teamwork</li>
                  <li>Individual Work</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className={classes.watch}></div>
        <div className={classes.section} ref={this.WorkHistory}>
          <div style={{ margin: 40 }}>
            {/* <Badge
              overlap="circle"
              style={{ position: "absolute", right: 46, top: 10 }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              badgeContent={
                <Tooltip title="Back to top" placement="top">
                  <Button onClick={this.handleOnClickTop}>
                    <ArrowUpwardIcon />
                  </Button>
                </Tooltip>
              }
            ></Badge> */}
            <h1 style={{ fontFamily: "Montserrat" }}>Work History</h1>
            {isDesktop ? (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat" }}
                >
                  DOWL, Salem, Or - Bridge Drafter
                </Typography>

                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat" }}
                >
                  December 2019 - PRESENT
                </Typography>
              </div>
            ) : (
              <div>
                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat" }}
                >
                  DOWL, Salem, Or - Bridge Drafter
                </Typography>

                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat", fontSize: 14 }}
                >
                  December 2019 - PRESENT
                </Typography>
              </div>
            )}
            <p style={{ fontFamily: "Montserrat" }}>
              Working with AutoCAD, AutoCAD Civil 3D, and MicroStation to create
              2D bridge plans. Working in a team environment with designers,
              engineers, and other CAD drafters. Working solely on certain
              projects for the majority of the projects scope. Working with
              other people's work and continuing the project where they left
              off.
            </p>
            <br />
            {isDesktop ? (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Cascade Coil Drapery, Tualatin, Or - Drafter
                </Typography>

                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat" }}
                >
                  January 2019 - December 2019
                </Typography>
              </div>
            ) : (
              <div>
                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Cascade Coil Drapery, Tualatin, Or - Drafter
                </Typography>

                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat", fontSize: 14 }}
                >
                  January 2019 - December 2019
                </Typography>
              </div>
            )}
            <p style={{ fontFamily: "Montserrat" }}>
              Working with AutoCAD and Inventor Professional. Creating 2D and 3D
              customer and fabrication plans. Working in a team environment to
              develop and design certain parts including designing mockup 3D
              parts in Inventor Professional. Working from start-to-finish on
              certain projects solely.
            </p>
            <br />
            {isDesktop ? (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Jet Industries, Salem, Or - HVAC/Electrical Drafter
                </Typography>

                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat" }}
                >
                  August 2018 - January 2019
                </Typography>
              </div>
            ) : (
              <div>
                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Jet Industries, Salem, Or - HVAC/Electrical Drafter
                </Typography>

                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat", fontSize: 14 }}
                >
                  August 2018 - January 2019
                </Typography>
              </div>
            )}
            <p style={{ fontFamily: "Montserrat" }}>
              Working with AutoCAD and AutoCAD Civil 3D to create HVAC and
              Electrical plans for clients. Working individually and in team
              environments.
            </p>
            <br />
            {isDesktop ? (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Barker Surveying, Salem, Or - Field Technician
                </Typography>

                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat" }}
                >
                  December 2017 - August 2018
                </Typography>
              </div>
            ) : (
              <div>
                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Barker Surveying, Salem, Or - Field Technician
                </Typography>

                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat", fontSize: 14 }}
                >
                  December 2017 - August 2018
                </Typography>
              </div>
            )}
            <p style={{ fontFamily: "Montserrat" }}>
              Working with a Survey Crew Chief to create topography maps using a
              S6 Trimble Total Station. Transferring data points to csv
              formatted files. Using handheld computers to tie in GPS/Satellites
              points onto the topography map. Working with extreme precision to
              create a 00+0.001 error ratio.
            </p>
            <br />
            {isDesktop ? (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Jacksons Food Stores, Salem, Or - Customer Service Rep.
                </Typography>

                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat" }}
                >
                  September 2015 - December 2017
                </Typography>
              </div>
            ) : (
              <div>
                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Jacksons Food Stores, Salem, Or - Customer Service Rep.
                </Typography>

                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Montserrat", fontSize: 14 }}
                >
                  September 2015 - December 2017
                </Typography>
              </div>
            )}
            <p style={{ fontFamily: "Montserrat" }}>
              Working as a fuel attendant or inside running the cash register.
              Cleaning, cooperating, maintaining multiple tasks at once.
            </p>
          </div>
        </div>
        <div className={classes.idea}></div>
        <div className={classes.section} ref={this.Connect}>
          <div style={{ margin: 40 }}>
            {/* <Badge
              overlap="circle"
              style={{ position: "absolute", right: 46, top: 10 }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              badgeContent={
                <Tooltip title="Back to top" placement="top">
                  <Button onClick={this.handleOnClickTop}>
                    <ArrowUpwardIcon />
                  </Button>
                </Tooltip>
              }
            ></Badge> */}
            <h1 style={{ fontFamily: "Montserrat" }}>Connect</h1>
            <div>
              <Typography
                component="h1"
                variant="h6"
                style={{ maxWidth: "400px", fontFamily: "Montserrat" }}
              >
                Say Hi! If you want to collaborate on something, or just reach
                out, send me a message.
              </Typography>
              <form noValidate style={{ width: "100%" }}>
                <div style={{ maxWidth: 700 }}>
                  <TextField
                    error={this.state.emptyName}
                    // helperText={this.state.helpName}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="name"
                    label="Name"
                    type="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    style={{ maxWidth: "500px", fontFamily: "Montserrat" }}
                  />

                  <TextField
                    error={this.state.emptyEmail}
                    // helperText={this.state.helpEmail}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    style={{ maxWidth: "500px", fontFamily: "Montserrat" }}
                  />
                </div>

                <TextField
                  error={this.state.emptyMessage}
                  // helperText={this.state.helpMessage}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="message"
                  label="Message"
                  rows="4"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  autoComplete="none"
                  multiline
                  style={{ fontFamily: "Montserrat" }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={this.handleSumbit}
                  style={{ fontFamily: "Montserrat" }}
                >
                  Send Message
                </Button>
              </form>
              {this.state.showAlert ? <SuccessAlert /> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(LandingMobile);
