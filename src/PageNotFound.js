import React, { Component } from "react";

//Material UI
import { withStyles } from "@material-ui/core/styles";

//Components

const useStyles = (theme) => ({
  root: {
    height: "100%",
    width: "100%",
    position: "fixed",
  },
});

export class PageNotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
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
    this.setState({ isDesktop: window.innerWidth > 410 });
  }

  togglePopup() {
    this.setState({ form: true });
  }

  render() {
    const { classes } = this.props;
    const isDesktop = this.state.isDesktop;

    const handleChange = (event, newValue) => {
      this.setState({ tab: newValue });
    };

    return <div className={classes.root}></div>;
  }
}

export default withStyles(useStyles)(PageNotFound);
