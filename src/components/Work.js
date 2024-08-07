import React from "react";

//Material UI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Divider from "@material-ui/core/Divider";

//Images
import FadeIn from "react-fade-in";

//Ionicons
import IosBriefcaseOutline from "react-ionicons/lib/IosBriefcaseOutline";

export default function Work() {
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
          work history
        </h1>

        <p style={{ color: "#9e9e9e", marginBottom: 20 }}>
          Feel free to reach out to me by clicking on the phone icon on the
          left.
        </p>
        <Divider style={{ backgroundColor: "#9e9e9e", marginBottom: 40 }} />
        <div style={{ width: "100%", display: "flex" }}>
          <IosBriefcaseOutline
            onClick={() => alert("Hi!")}
            fontSize="35px"
            color="#00C483"
            style={{ marginRight: 10, marginTop: 6 }}
          />
          <h1 style={{ fontSize: 34, color: "#FFFFFF", marginBottom: 30 }}>
            experience
          </h1>
        </div>

        <Typography style={{ color: "#00C483", fontSize: 14 }}>
          November 2021 - current
        </Typography>
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            marginTop: 2,
            marginBottom: 4,
          }}
        >
          SMA Technologies, Sr. Software Engineer
        </h1>
        <Typography style={{ color: "#9e9e9e", fontSize: 14, marginBottom: 4 }}>
          Houston, Texas (Remote)
        </Typography>

        <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
          Working as a software engineer leading the frontend on my team. We are
          using React (with TypeScript), C# backend, and a SQL Database. Our
          team is rewriting a legacy desktop application written in Java and
          converting it to a cloud web application.
        </p>

        <Typography style={{ color: "#00C483", fontSize: 14 }}>
          July 2021 - November 2021
        </Typography>
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            marginTop: 2,
            marginBottom: 4,
          }}
        >
          Buildable, Software Developer
        </h1>
        <Typography style={{ color: "#9e9e9e", fontSize: 14, marginBottom: 4 }}>
          McMinnvile, Oregon
        </Typography>

        <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
          Working as a software developer with a team of other software
          developers, designers, and product managers creating a diverse
          spectrum of unique and secure software applications.
        </p>

        <Typography style={{ color: "#00C483", fontSize: 14 }}>
          Contract
        </Typography>
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            marginTop: 2,
            marginBottom: 4,
          }}
        >
          Papé Group Inc, Full-Stack Software Developer
        </h1>
        <Typography style={{ color: "#9e9e9e", fontSize: 14, marginBottom: 4 }}>
          Remote
        </Typography>

        <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
          Working as an independent full-stack software developer to design,
          create, and develop a web application. Scope of work included
          maintaining site information, records, and user security across
          hundreds of sites in Washington, Oregon, and California. Work included
          setting up authentication, database design, serverless API functions,
          and a web application creation.
        </p>

        <Typography style={{ color: "#00C483", fontSize: 14 }}>
          Dec 2019 - July 2021
        </Typography>
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            marginTop: 2,
            marginBottom: 4,
          }}
        >
          Dowl LLC, Bridge Structural & Marine Drafter
        </h1>
        <Typography style={{ color: "#9e9e9e", fontSize: 14, marginBottom: 4 }}>
          Salem, Oregon
        </Typography>

        <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
          Working with AutoCAD, AutoCAD Civil 3D, and MicroStation to create 2D
          bridge plans. Working in a team environment with designers, engineers,
          and other CAD drafters. Working solely on certain projects for the
          majority of the projects scope. Working with other people's work and
          continuing the project where they left off.
        </p>

        <Typography style={{ color: "#00C483", fontSize: 14 }}>
          Jan 2019 - Dec 2019
        </Typography>
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            marginTop: 2,
            marginBottom: 4,
          }}
        >
          Cascade Coil Drapery, Safety & Security Drafter
        </h1>
        <Typography style={{ color: "#9e9e9e", fontSize: 14, marginBottom: 4 }}>
          Tualatin, Oregon
        </Typography>

        <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
          Working with AutoCAD and Inventor Professional. Creating 2D and 3D
          customer and fabrication plans. Working in a team environment to
          develop and design certain parts including designing mockup 3D parts
          in Inventor Professional. Working from start-to-finish on certain
          projects solely.
        </p>

        <Typography style={{ color: "#00C483", fontSize: 14 }}>
          Aug 2018 - Jan 2019
        </Typography>
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            marginTop: 2,
            marginBottom: 4,
          }}
        >
          Jet Industries, HVAC & Electrical Drafter
        </h1>
        <Typography style={{ color: "#9e9e9e", fontSize: 14, marginBottom: 4 }}>
          Salem, Oregon
        </Typography>

        <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
          Working with AutoCAD and AutoCAD Civil 3D to create HVAC and
          Electrical plans for clients. Working individually and in team
          environments.
        </p>

        <Typography style={{ color: "#00C483", fontSize: 14 }}>
          Dec 2017 - Aug 2018
        </Typography>
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            marginTop: 2,
            marginBottom: 4,
          }}
        >
          Barker Surveying, Field Technician
        </h1>
        <Typography style={{ color: "#9e9e9e", fontSize: 14, marginBottom: 4 }}>
          Salem, Oregon
        </Typography>

        <p style={{ color: "#9e9e9e", marginBottom: 40 }}>
          Working with a Survey Crew Chief to create topography maps using a S6
          Trimble Total Station. Transferring data points to csv formatted
          files. Using handheld computers to tie in GPS/Satellites points onto
          the topography map. Working with extreme precision to create a
          00+0.001 error ratio.
        </p>
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
    backgroundColor: "#99cc87",
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
