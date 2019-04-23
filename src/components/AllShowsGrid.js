import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
    root: {
        flexGrow: 1,
        top: "150px",
        zIndex: 99,
        position: "relative",
        marginLeft: "5%",
        marginRight: "5%"
    },
    paper: {
        //   padding: theme.spacing.unit * 2,
        textAlign: 'center',
        backgroundColor: "transparent"
    },
    chip: {
        margin: 3,
        backgroundColor: "transparent",
        fontFamily: "Share Tech Mono",
        color: "white",
        border: "1px solid white"
    },
});


var showsLinksPictureWidgetsTab = [
    "https://www.mixcloud.com/widget/iframe/?feed=%2Fadamkvasnica3%2Fcosmic-grooves-drum-breaks%2F",
    "https://www.mixcloud.com/widget/iframe/?feed=%2FNTSRadio%2Fthe-uline-catalog-20th-january-2019%2F",
    "https://www.mixcloud.com/widget/iframe/?feed=%2FKrzysztofWZuber%2Fraga-lehestani-s04-e16-20-i-2019%2F",
    "https://www.mixcloud.com/widget/iframe/?feed=%2Fadamkvasnica3%2Fcosmic-grooves-drum-breaks%2F",
    "https://www.mixcloud.com/widget/iframe/?feed=%2FNTSRadio%2Flukid-21st-january-2019%2F",
    "https://www.mixcloud.com/widget/iframe/?feed=%2FNTSRadio%2Fpsychedelic-ensemble-21st-january-2019%2F",
    "https://www.mixcloud.com/widget/iframe/?feed=%2FNTSRadio%2Felena-colombi-interstellar-funk-31st-december-2018%2F",
    "https://www.mixcloud.com/widget/iframe/?feed=%2FNTSRadio%2Fnonsense-30th-december-2018%2F",
    "https://www.mixcloud.com/widget/iframe/?feed=%2FNTSRadio%2Fradio-fenriz-9th-august-2017%2F",
    "https://www.mixcloud.com/widget/iframe/?feed=%2FNTSRadio%2Felena-colombi-interstellar-funk-31st-december-2018%2F",
    "https://www.mixcloud.com/widget/iframe/?feed=%2FNTSRadio%2Fnonsense-30th-december-2018%2F",
    "https://www.mixcloud.com/widget/iframe/?feed=%2FNTSRadio%2Fradio-fenriz-9th-august-2017%2F"

];

var shows = {
    "episodes": [
        { "tags": ["HIP-HOP", "TRAP", "GANGSTA RAP", "URABAN", "FRANCE", "DEUTSCH", "GRIME"], "src": "https://www.mixcloud.com/widget/iframe/?feed=%2Fflightmode_podcast%2Fflight-mode-1%2F" },
        { "tags": ["BLACK METAL", "SHOEGAZE", "AVANT-GARDE", "POST BM", "DOOM", "GRINDCORE", "DEATH"], "src": "https://www.mixcloud.com/widget/iframe/?feed=%2Fflightmode_podcast%2F2%2F" },
        { "tags": ["AMBIENT", "COSMIC", "SPACE", "DEEP HOUSE", "ADVENTUROUS", "DARK AMBIENT", "EXPERIMENTAL", "MINIMAL SYNTH"], "src": "https://www.mixcloud.com/widget/iframe/?feed=%2Fflightmode_podcast%2F3%2F" },
        { "tags": ["AFRICAN", "ETNO", "AFROBEAT", "WORLD MUSIC", "AFROFUTURISM", "SOUTH AFRICAN HOUSE"], "src": "https://www.mixcloud.com/widget/iframe/?feed=%2Fflightmode_podcast%2F4%2F" }

    ]
}

function AllShowsGrid(props) {
    const { classes } = props;

    return (
        // <div className={classes.root}>
        //     <Grid container spacing={32}>
        //         {
        //             showsLinksPictureWidgetsTab.map((item, index) => {
        //                 return (
        //                     <Grid item xs={12} xl={3} sm={6} md={4}>
        //                         <Paper className={classes.paper} ><iframe style={{border: "1px solid #FFF"}}  width="100%" height="300" src={item} frameborder="0" ></iframe>
        //                             <Chip label="RNB" variant="outlined" className={classes.chip} />
        //                             <Chip label="RAP" variant="outlined" className={classes.chip} />
        //                             <Chip label="HIP HOP" variant="outlined" className={classes.chip} />
        //                             <Chip label="RNB" variant="outlined" className={classes.chip} />
        //                         </Paper>
        //                     </Grid>
        //                 );
        //             })
        //         }
        //     </Grid>
        // </div>
        <div className={classes.root}>
            <Grid container spacing={32}>
                {
                    shows.episodes.map((item, index) => {
                        return (
                            <Grid item xs={12} xl={3} sm={6} md={4}>
                                <Paper className={classes.paper} ><iframe style={{ border: "1px solid #FFF"} } width="100%" height="300" src={item.src} frameborder="0" ></iframe>
                                    {
                                        shows.episodes[index].tags.map((item) => {
                                            return (
                                                <Chip label={item} variant="outlined" className={classes.chip} />
                                            );
                                        })
                                    }
                                </Paper>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </div>
    );
}

AllShowsGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AllShowsGrid);

