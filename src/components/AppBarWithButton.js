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
  grow: {
    flexGrow: 1,
    textAlign: "center",
    fontFamily: "Share Tech Mono"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },

  appBar: {
    background: "rgba(0, 0, 0, 1.0);",
    marginLeft: "0px",
    marginRight: "0px",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.7);"
    }
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar className={classes.appBar} color="default">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="primary"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h3"
              color="primary"
              className={classes.grow}
            >
              Flight-mode
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
