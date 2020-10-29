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
import resumepic from "./resumepic.png";
import BB from "./BB.png";

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

import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Work from "./components/Work";

//npmjs
import FadeIn from "react-fade-in";
import { BrowserView, MobileView } from "react-device-detect";
import SlideToggle from "react-slide-toggle";

//Components
import SuccessAlert from "./SuccessAlert";
import { MessageForm } from "./Submission";

//Pages
import LandingMobile from "./LandingMobile";

//796px

export class LandingNew extends Component {
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
      highlighted: 0,
    };

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
    this.setState({ isDesktop: window.innerWidth > 796 });
  }

  setHighlight(number) {
    this.setState({ highlighted: number });
  }

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
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
        className="scroll"
      >
        {isDesktop ? (
          <div className={classes.black}>
            <div className={classes.border}>
              <div className={classes.flex}>
                <SlideToggle duration={800}>
                  {({ toggle, setCollapsibleElement }) => (
                    <div className={classes.menu}>
                      <div className={classes.menuIcon}>
                        <div>
                          <IconButton
                            onClick={toggle}
                            className={classes.buttonShop}
                          >
                            <MenuIcon
                              style={{ fill: "black", width: 35, height: 35 }}
                            />
                          </IconButton>
                        </div>
                      </div>
                      <div
                        className="my-collapsible__content"
                        ref={setCollapsibleElement}
                        className={classes.alignIcons}
                      >
                        <IconButton
                          className={classes.buttonShop}
                          onClick={() => this.setState({ highlighted: 0 })}
                        >
                          {this.state.highlighted == 0 ? (
                            <IosPersonOutline fontSize="35px" color="#00C483" />
                          ) : (
                            <IosPersonOutline fontSize="35px" color="#FFFFFF" />
                          )}
                        </IconButton>
                        <IconButton
                          className={classes.buttonShop}
                          onClick={() => this.setState({ highlighted: 1 })}
                        >
                          {this.state.highlighted == 1 ? (
                            <IosCallOutline fontSize="35px" color="#00C483" />
                          ) : (
                            <IosCallOutline fontSize="35px" color="#FFFFFF" />
                          )}
                        </IconButton>
                        <IconButton
                          className={classes.buttonShop}
                          onClick={() => this.setState({ highlighted: 2 })}
                        >
                          {this.state.highlighted == 2 ? (
                            <IosBuildOutline fontSize="35px" color="#00C483" />
                          ) : (
                            <IosBuildOutline fontSize="35px" color="#FFFFFF" />
                          )}
                        </IconButton>
                        <IconButton
                          className={classes.buttonShop}
                          onClick={() => this.setState({ highlighted: 3 })}
                        >
                          {this.state.highlighted == 3 ? (
                            <IosBriefcaseOutline
                              fontSize="35px"
                              color="#00C483"
                            />
                          ) : (
                            <IosBriefcaseOutline
                              fontSize="35px"
                              color="#FFFFFF"
                            />
                          )}
                        </IconButton>
                      </div>
                      <div className={classes.pdfIcon}>
                        <div>
                          <a href={"/BrennenResume.pdf"} target="_blank">
                            <IconButton className={classes.buttonShop}>
                              <IosCloudDownloadOutline
                                fontSize="35px"
                                color="#00C483"
                              />
                            </IconButton>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </SlideToggle>
                <div className={classes.pic}>
                  {/* <img src={resumepic} style={{width: "100%", height: "100%"}}/> */}
                  <div className={classes.picInfo}>
                    <h2 style={{ fontFamily: "Montserrat", color: "#FFFFFF" }}>
                      Brennen Boese
                    </h2>
                    <Typography style={{ color: "#00C483" }}>
                      Software Developer
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                      }}
                    >
                      <a
                        href={"https://github.com/surveySays?tab=repositories"}
                        target="_blank"
                      >
                        <IconButton className={classes.buttonShop}>
                          <GitHubIcon style={{ fill: "white" }} />
                        </IconButton>
                      </a>

                      <a
                        href={
                          "https://www.linkedin.com/in/brennen-boese-200755191/"
                        }
                        target="_blank"
                      >
                        <IconButton className={classes.buttonShop}>
                          <LinkedInIcon style={{ fill: "white" }} />
                        </IconButton>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    width: "calc(60% - 80px)",
                    height: "90%",
                    overflowY: "scroll",
                    color: "#000000",
                    backgroundColor: "#1c1e1f",
                    marginTop: "auto",
                    marginBottom: "auto",
                    padding: 20,
                  }}
                  className="scroll"
                >
                  {this.state.highlighted == 0 ? <Aboutme /> : null}
                  {this.state.highlighted == 1 ? <Contact /> : null}
                  {this.state.highlighted == 2 ? <Projects /> : null}
                  {this.state.highlighted == 3 ? <Work /> : null}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.black}>
            <div className={classes.borderSmall}>
              <div className={classes.flex}>
                <SlideToggle duration={800}>
                  {({ toggle, setCollapsibleElement }) => (
                    <div className={classes.menuSmall}>
                      <div className={classes.menuIconSmall}>
                        <div>
                          <IconButton
                            onClick={toggle}
                            className={classes.buttonShop}
                          >
                            <MenuIcon
                              style={{ fill: "black", width: 35, height: 35 }}
                            />
                          </IconButton>
                        </div>
                      </div>
                      <div
                        className="my-collapsible__content"
                        ref={setCollapsibleElement}
                        className={classes.alignIcons}
                      >
                        <IconButton
                          className={classes.buttonShop}
                          onClick={() => this.setState({ highlighted: 0 })}
                        >
                          {this.state.highlighted == 0 ? (
                            <IosPersonOutline fontSize="35px" color="#00C483" />
                          ) : (
                            <IosPersonOutline fontSize="35px" color="#FFFFFF" />
                          )}
                        </IconButton>
                        <IconButton
                          className={classes.buttonShop}
                          onClick={() => this.setState({ highlighted: 1 })}
                        >
                          {this.state.highlighted == 1 ? (
                            <IosCallOutline fontSize="35px" color="#00C483" />
                          ) : (
                            <IosCallOutline fontSize="35px" color="#FFFFFF" />
                          )}
                        </IconButton>
                        <IconButton
                          className={classes.buttonShop}
                          onClick={() => this.setState({ highlighted: 2 })}
                        >
                          {this.state.highlighted == 2 ? (
                            <IosBuildOutline fontSize="35px" color="#00C483" />
                          ) : (
                            <IosBuildOutline fontSize="35px" color="#FFFFFF" />
                          )}
                        </IconButton>
                        <IconButton
                          className={classes.buttonShop}
                          onClick={() => this.setState({ highlighted: 3 })}
                        >
                          {this.state.highlighted == 3 ? (
                            <IosBriefcaseOutline
                              fontSize="35px"
                              color="#00C483"
                            />
                          ) : (
                            <IosBriefcaseOutline
                              fontSize="35px"
                              color="#FFFFFF"
                            />
                          )}
                        </IconButton>
                      </div>
                      <div className={classes.pdfIconSmall}>
                        <div>
                          <a href={"/BrennenResume.pdf"} target="_blank">
                            <IconButton className={classes.buttonShop}>
                              <IosCloudDownloadOutline
                                fontSize="35px"
                                color="#00C483"
                              />
                            </IconButton>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </SlideToggle>

                <div
                  style={{
                    width: "100%",
                    height: "95%",
                    overflowY: "scroll",
                    color: "#000000",
                    backgroundColor: "#1c1e1f",
                    marginTop: "auto",
                    marginBottom: "auto",
                    padding: 20,
                  }}
                  className="scroll"
                >
                  {this.state.highlighted == 0 ? <Aboutme /> : null}
                  {this.state.highlighted == 1 ? <Contact /> : null}
                  {this.state.highlighted == 2 ? <Projects /> : null}
                  {this.state.highlighted == 3 ? <Work /> : null}
                </div>
              </div>
            </div>
          </div>
        )}
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
  borderSmall: {
    width: "95%",
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
  menuSmall: {
    width: 55,
    height: "95%",
    backgroundColor: "#1c1e1f",
    marginTop: "auto",
    marginBottom: "auto",
  },
  pic: {
    width: "40%",
    height: "95%",
    marginTop: "auto",
    marginBottom: "auto",
    position: "relative",
    backgroundImage: `url(${resumepic})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 10,
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
  menuIconSmall: {
    height: 55,
    width: 55,
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
  pdfIconSmall: {
    height: 55,
    width: 55,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 15,
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
  buttonShop: {
    "&:focus": {
      outline: "none",
    },
  },
});

export default withStyles(useStyles)(LandingNew);
