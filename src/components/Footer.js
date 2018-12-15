import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SvgIcon from '@material-ui/core/SvgIcon';

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#FFFFFF" }, 
    secondary: { main: "#11cb5f" }
  }
});

const styles = {
    root: {
        width: "100%",
        background: "rgba(0, 0, 0, 0.1);",
        backgroundColor: "black"
    },

    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
          color: "#8cfd09",
        },
      }

};

const FacebookIcon = (props) => (
    <SvgIcon {...props}>
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
    </SvgIcon>
  );

const InstagramIcon = (props) => (
    <SvgIcon {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </SvgIcon>
  );

const MixCloudIcon = (props) => (
    <SvgIcon {...props}>
      <path d="M21.95 19.062c-.154 0-.31-.045-.445-.135-.369-.25-.465-.75-.225-1.11.738-1.094 1.125-2.381 1.125-3.719s-.387-2.625-1.125-3.721c-.249-.368-.145-.866.216-1.106.375-.249.87-.146 1.108.214.917 1.365 1.396 2.97 1.396 4.62 0 1.648-.479 3.254-1.396 4.619-.135.239-.39.359-.645.359l-.009-.021z"/><path d="M19.66 17.768c-.153 0-.308-.045-.445-.139-.369-.239-.463-.734-.215-1.094.489-.721.747-1.545.747-2.43 0-.855-.258-1.695-.747-2.431-.248-.36-.154-.854.215-1.095s.857-.15 1.106.225c.669.99 1.021 2.145 1.021 3.314 0 1.201-.352 2.34-1.021 3.315-.146.24-.406.36-.661.36v-.025zm-3.73-7.153c-.314-3.197-3.016-5.699-6.3-5.699-2.721 0-5.13 1.748-5.995 4.283C1.588 9.501 0 11.269 0 13.4c0 2.344 1.912 4.254 4.26 4.254h10.908c1.964 0 3.566-1.594 3.566-3.557 0-1.706-1.2-3.129-2.805-3.48v-.002zm-.762 5.446H4.263c-1.466 0-2.669-1.191-2.669-2.658 0-1.465 1.193-2.658 2.669-2.658.71 0 1.381.285 1.886.781.3.314.811.314 1.125 0 .3-.301.3-.811 0-1.125-.555-.542-1.231-.931-1.965-1.111.75-1.665 2.43-2.774 4.305-2.774 2.609 0 4.74 2.129 4.74 4.738 0 .512-.075 1.006-.24 1.486-.135.42.09.869.51 1.02.074.03.165.045.24.045.33 0 .645-.211.75-.54.105-.315.18-.63.225-.96.734.285 1.26 1.005 1.26 1.83 0 1.096-.885 1.979-1.965 1.979l.034-.053z" />
    </SvgIcon>
  );

const fb_URL = "https://www.facebook.com/";
const insta_URL = "https://www.instagram.com/";
const mixcloud_URL = "https://www.mixcloud.com/";

class Footer extends React.Component {

    openNewSite = url => {
        var win = window.open(url, "_blank");
        win.focus();
      }

    render() {
        const { classes } = this.props;
        
        return (
            <MuiThemeProvider theme={theme}>
            <BottomNavigation className={classes.root}>
                <BottomNavigationAction icon={<FacebookIcon className={classes.iconHover} color="primary" onClick={()=>this.openNewSite(fb_URL)}/>} />
                <BottomNavigationAction icon={<InstagramIcon className={classes.iconHover} color="primary" onClick={()=>this.openNewSite(insta_URL)} />} />
                <BottomNavigationAction icon={<MixCloudIcon className={classes.iconHover} color="primary" onClick={()=>this.openNewSite(mixcloud_URL)} />} />
            </BottomNavigation>
            </MuiThemeProvider>
        
        );
           
    }

}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
