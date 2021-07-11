import React, { useState, useEffect } from "react";

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
import BarrelCash from "../BarrelCash.png";
import adaptMi from "../adaptMi.png";
import iPhone from "../iPhone.jpg";
import Naoux from "../naoux.png";
import BrennenWeb from "../brennenweb.png";



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

export default function Projects() {
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
        <h1 style={{ fontSize: 55, color: "#FFFFFF", marginBottom: 30 }}>
          my projects
        </h1>

        <p style={{ color: "#9e9e9e", marginBottom: 15 }}>
          I am always working on code or trying to better my skills at a new
          computer science language. Below you will find some of my past or
          present projects.
        </p>
        <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
          While these projects consist of React.js, React Native, javascript, html, css, and NoSQL databases. I also work 
          on object oriented programming, and data structures using C++ and C#. Visit my <a href="https://github.com/surveySays?tab=repositories" target="_blank" style={{color: "#00C483"}}>Github</a> to see some of my 
          open-source code.
        </p>
        <Divider style={{ backgroundColor: "#9e9e9e", marginBottom: 30 }} />

       

        <div className={classes.column} style={{marginBottom: 50}}>
          {
            <img
              src={BarrelCash}
              alt=""
              style={{
                width: "100%",
                maxHeight: 400,
                marginBottom: 20,
              }}
            />
          }
          <h1 style={{ fontSize: 34, color: "#FFFFFF", marginBottom: 15 }}>
            barrel cash web
          </h1>

          <p
            style={{
              maxWidth: "450px",
              fontFamily: "Montserrat",
              color: "#9e9e9e",
            }}
          >
            A web application written in React.js to display information on my iOS application Barrel Cash. The iOS application
            will be available on the iOS app store in May 2021 and was written using React Native. 
          </p>
          <a
            href="https://barrelcash.app/"
            target="_blank"
            style={{ fontFamily: "Montserrat", color: "#00C483" }}
          >
            Barrel Cash Web
          </a>
        </div>

        <div className={classes.column}>
          {
            <img
              src={Naoux}
              alt=""
              style={{
                width: "100%",
                maxHeight: 400,
                marginBottom: 20,
              }}
            />
          }
          <h1 style={{ fontSize: 34, color: "#FFFFFF", marginBottom: 15 }}>
            Naoux Outdoors LLC
          </h1>

          <p
            style={{
              maxWidth: "450px",
              fontFamily: "Montserrat",
              color: "#9e9e9e",
            }}
          >
            An e-commerce outdoor clothing line created by myself and two others. Custom website created with React.js, custom
            Rest API created with Node.js and Axios, and hosting and database using firebase. 
          </p>
          <a
            href="https://naoux.co/"
            target="_blank"
            style={{ fontFamily: "Montserrat", color: "#00C483" }}
          >
            naoux.co
          </a>
        </div>

        <div className={classes.column}>
          {
            <img
              src={BrennenWeb}
              alt=""
              style={{
                width: "100%",
                maxHeight: 400,
                marginBottom: 20,
                marginTop: 60,
              }}
            />
          }
          <h1 style={{ fontSize: 34, color: "#FFFFFF", marginBottom: 15 }}>
            this website
          </h1>

          <p
            style={{
              maxWidth: "450px",
              fontFamily: "Montserrat",
              color: "#9e9e9e",
            }}
          >
            A web application that I created to show off some of my skills in React.js. I am constantly
            updating this site with new projects I am working on and updating others that I am close to finishing. 
          </p>
        </div>

        <div className={classes.column}>
          {
            <img
              src={adaptMi}
              alt=""
              style={{
                width: "100%",
                maxHeight: 400,
                marginBottom: 20,
                marginTop: 60,
              }}
            />
          }
          <h1 style={{ fontSize: 34, color: "#FFFFFF", marginBottom: 15 }}>
            adaptMi
          </h1>

          <p
            style={{
              maxWidth: "450px",
              fontFamily: "Montserrat",
              color: "#9e9e9e",
            }}
          >
            A web application that my Junior Project team and I developed. This
            application mimics Discord and Omegle allowing you to chat
            anonymously with people with similar interest.
          </p>

          <a
            href="https://adaptmi.io/"
            target="_blank"
            style={{ fontFamily: "Montserrat", color: "#00C483" }}
          >
            adaptMi
          </a>
        </div>

        <div className={classes.column}>
          {
            <img
              src={iPhone}
              alt=""
              style={{
                width: "100%",
                maxHeight: 400,
                marginBottom: 20,
                marginTop: 60,
              }}
            />
          }
          <h1 style={{ fontSize: 34, color: "#FFFFFF", marginBottom: 15 }}>
            barrel cash app
          </h1>

          <p
            style={{
              maxWidth: "450px",
              fontFamily: "Montserrat",
              color: "#9e9e9e",
            }}
          >
            A phone budgeting application that I am working on for the iOS App
            Store & Android Play Store.
          </p>

          <p style={{ color: "#FFFFFF" }}>Coming Soon</p>
        </div>
      </FadeIn>
    </div>
  );
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
