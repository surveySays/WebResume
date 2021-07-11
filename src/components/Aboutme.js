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
import resumepic from "../resumepic.jpg";

//Ionicons
import IosCallOutline from "react-ionicons/lib/IosCallOutline";
import IosPersonOutline from "react-ionicons/lib/IosPersonOutline";
import IosBriefcaseOutline from "react-ionicons/lib/IosBriefcaseOutline";
import IosBuildOutline from "react-ionicons/lib/IosBuildOutline";
import IosCloudDownloadOutline from "react-ionicons/lib/IosCloudDownloadOutline";
import IosLaptop from "react-ionicons/lib/IosLaptop";
import IosJetOutline from "react-ionicons/lib/IosJetOutline";
import LogoBuffer from "react-ionicons/lib/LogoBuffer";
import MdCalculator from "react-ionicons/lib/MdCalculator";
import IosCode from "react-ionicons/lib/IosCode";
import IosSchool from "react-ionicons/lib/IosSchool";

export default function Aboutme() {
  const isDesktop = useMedia("(min-width: 467px)");
  const smallPhoto = useMedia("(min-width: 796px)");

  const classes = useStyles();
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
        {smallPhoto ? null : (
          <div>
            <img
              src={resumepic}
              style={{ width: "100%", height: "100%", borderRadius: 10 }}
            />
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
                  href={"https://www.linkedin.com/in/brennen-boese-200755191/"}
                  target="_blank"
                >
                  <IconButton className={classes.buttonShop}>
                    <LinkedInIcon style={{ fill: "white" }} />
                  </IconButton>
                </a>
              </div>
            </div>
          </div>
        )}

        <h1 style={{ fontSize: 55, color: "#FFFFFF", marginBottom: 30 }}>
          about me
        </h1>
        <Breadcrumbs
          aria-label="breadcrumb"
          style={{ color: "#00C483", marginBottom: 20 }}
        >
          <Typography style={{ color: "#00C483" }}>
            <i>23 years</i>
          </Typography>
          <Typography style={{ color: "#00C483" }}>
            <i>Designer</i>
          </Typography>
          <Typography style={{ color: "#00C483" }}>
            <i>Software Developer</i>
          </Typography>
          <Typography style={{ color: "#00C483" }}>
            <i>Full-Stack</i>
          </Typography>
        </Breadcrumbs>
        <p style={{ fontFamily: "Montserrat", color: "#9e9e9e" }}>
          This website was created by me using React.js. Dont feel like
          scrolling through this whole website? Open my PDF resume{" "}
          <a
            href={"/BrennenResume.pdf"}
            target="_blank"
            style={{ color: "#00C483" }}
          >
            here.
          </a>
        </p>

        <p style={{ fontFamily: "Montserrat", color: "#9e9e9e" }}>
          <b>Hi</b>, my name is Brennen. I recently graduated from Oregon
          Institute of Technology with a B.S. in{" "}
          <b>Software Engineering Technology</b>. I am currently working as a
          full-time software developer at <b>Buildable</b>.
        </p>
        <p style={{ fontFamily: "Montserrat", color: "#9e9e9e" }}>
          My passion is to create dynamic full-stack software applications that
          are unique and provide a truly immersive user experience. My favorite
          software languages are <b>C++</b>, <b>React</b>, & <b>React Native</b>
          . Recently I have been looking into the power of <u>threejs.org</u> to
          create 3D immersive web experiences with code.
        </p>

        <Divider style={{ backgroundColor: "#9e9e9e", marginBottom: 30 }} />
        <h1 style={{ fontSize: 34, color: "#FFFFFF", marginBottom: 30 }}>
          my services
        </h1>

        {isDesktop ? (
          <div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "49%" }}>
                <IosLaptop
                  onClick={() => alert("Hi!")}
                  fontSize="35px"
                  color="#00C483"
                />
                <h1 style={{ color: "#FFFFFF", fontSize: 20, marginTop: 8 }}>
                  development
                </h1>
                <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
                  I specialize in dynamic web development including front-end
                  UI/UX as well as back-end data manipulation. Also have
                  experience developing code for iOS and android.
                </p>
              </div>
              <div style={{ width: "49%" }}>
                <IosJetOutline
                  onClick={() => alert("Hi!")}
                  fontSize="35px"
                  color="#00C483"
                />
                <h1 style={{ color: "#FFFFFF", fontSize: 20, marginTop: 8 }}>
                  design
                </h1>
                <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
                  5 years experience developing 3D mockups using AutoDesk
                  Inventor Profesional as well as AutoCad. Great UX/UI
                  experience involving UML diagrams for the flow of an
                  application.
                </p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "49%" }}>
                <LogoBuffer
                  onClick={() => alert("Hi!")}
                  fontSize="35px"
                  color="#00C483"
                />
                <h1 style={{ color: "#FFFFFF", fontSize: 20, marginTop: 8 }}>
                  database
                </h1>
                <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
                  Experience with both SQL and NoSql database manipulation for
                  web development projects. Experience creating entire schemas
                  for SQL and SQL querying.
                </p>
              </div>
              <div style={{ width: "49%" }}>
                <IosCode
                  onClick={() => alert("Hi!")}
                  fontSize="35px"
                  color="#00C483"
                />
                <h1 style={{ color: "#FFFFFF", fontSize: 20, marginTop: 8 }}>
                  optimization
                </h1>
                <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
                  Rewriting legacy code to modern technologies to provide
                  optimized speed and organized methods. Following S.O.L.I.D.
                  principles when applicable in all applications.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ width: "100%" }}>
              <IosLaptop
                onClick={() => alert("Hi!")}
                fontSize="35px"
                color="#00C483"
              />
              <h1 style={{ color: "#FFFFFF", fontSize: 20, marginTop: 8 }}>
                development
              </h1>
              <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
                I specialize in web development including front-end UI/UX as
                well as back-end data manipulation. Also have experience
                developing code for iOS and android.
              </p>
            </div>
            <div style={{ width: "100%" }}>
              <IosJetOutline
                onClick={() => alert("Hi!")}
                fontSize="35px"
                color="#00C483"
              />
              <h1 style={{ color: "#FFFFFF", fontSize: 20, marginTop: 8 }}>
                design
              </h1>
              <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
                5 years experience developing 3D mockups using AutoDesk Inventor
                Profesional as well as AutoCad. Great UX/UI experience involving
                UML diagrams for the flow of an application.
              </p>
            </div>

            <div style={{ width: "100%" }}>
              <LogoBuffer
                onClick={() => alert("Hi!")}
                fontSize="35px"
                color="#00C483"
              />
              <h1 style={{ color: "#FFFFFF", fontSize: 20, marginTop: 8 }}>
                database
              </h1>
              <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
                Experience with both SQL and NoSql database manipulation for web
                development projects. Experience creating entire schemas for SQL
                and SQL querying.
              </p>
            </div>
            <div style={{ width: "100%" }}>
              <IosCode
                onClick={() => alert("Hi!")}
                fontSize="35px"
                color="#00C483"
              />
              <h1 style={{ color: "#FFFFFF", fontSize: 20, marginTop: 8 }}>
                optimization
              </h1>
              <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
                Rewriting legacy code in order for optimized speed and organized
                methods. Following S.O.L.I.D. principles when applicable in all
                applications.
              </p>
            </div>
          </div>
        )}
        <Divider style={{ backgroundColor: "#9e9e9e", marginBottom: 40 }} />

        <div style={{ width: "100%", display: "flex" }}>
          <IosSchool
            onClick={() => alert("Hi!")}
            fontSize="35px"
            color="#00C483"
            style={{ marginRight: 10, marginTop: 6 }}
          />
          <h1 style={{ fontSize: 34, color: "#FFFFFF", marginBottom: 30 }}>
            education
          </h1>
        </div>
        <h1 style={{ color: "#FFFFFF", fontSize: 20, marginTop: 8 }}>
          Oregon Institute of Technology
        </h1>
        <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
          B.S. - Software Engineering Technology
        </p>
        <h1 style={{ color: "#FFFFFF", fontSize: 20, marginTop: 8 }}>
          Chemeketa Community College
        </h1>
        <p style={{ color: "#9e9e9e", marginBottom: 40 }}>Computer Drafting</p>
        <h1 style={{ color: "#FFFFFF", fontSize: 20, marginTop: 8 }}>
          Sprague High School
        </h1>
        <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
          2016 Graduating Class
        </p>
      </FadeIn>
    </div>
  );
}

function useMedia(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addListener(listener);

    return () => media.removeListener(listener);
  }, [query]);

  return matches;
}

const useStyles = makeStyles(() => ({
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
  buttonShop: {
    "&:focus": {
      outline: "none",
    },
  },
}));
