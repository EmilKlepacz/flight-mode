import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#FFFFFF" }, // This is just green.A700 as hex.
    secondary: { main: "#11cb5f" }
  }
});

const styles = {
  root: {
    flexGrow: 1,
    zIndex: 1,
  },

  typographyContainer: {
    marginTop: "30%",
    marginLeft: "5%",
    marginRight: "5%"
  },

  typography: {
    fontFamily: "Share Tech Mono"
  }
};

function ContentText(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.typographyContainer}>
          <Typography
            className={classes.typography}
            variant="body1"
            paragraph="true"
            align="justify"
            color="primary"
          >
            Flight-mode is a podcast series established by Radoslaw Piechocinski &amp; Emil Klepacz.
          </Typography>
          <Typography
            className={classes.typography}
            variant="body1"
            paragraph="true"
            align="justify"
            color="primary"
          >
            Strongly inspired by correlation of underground and mainstream music/art/events we are trying to 
            showcase the most distingiushed and finest pieces. We refused to repress parts of ourselvs so we are 
            finally able to express all of these sides in the singular show. Discussing and juggling aesthetics
            brought us to the point where new modifications as a tool of transgression are equal to classics.
            
          </Typography>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

ContentText.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContentText);
