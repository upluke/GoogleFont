import React, { useState, useEffect } from "react";
import axios from "axios";
import GoogleFontLoader from "react-google-font-loader";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";
import ToolBar from './ToolBar'

import { makeStyles } from "@material-ui/core/styles";
export const FontContext = React.createContext();
const useStyles = makeStyles(theme => ({
    appContainer: {
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center'
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        padding: '3rem 3rem 1rem 3rem'
    }, topNav: {
        color: 'grey',
        borderBottom: '1px solid grey',
        width: '100%',
        padding: '1rem 3rem 1rem 3rem',
        justifyContent: 'center'
    }, TopRightMenu: {
        textAlign: 'right',
        alignSelf: 'flex-end'

    }, foot: {
        marginTop: '2rem',
        borderTop: '1px black solid',
        textAlign: 'center',
        padding: '2rem'
    }
}));

export default () => {
    const classes = useStyles();

    const [state, setState] = useState({ fonts: [], amount: 100, filter: '' });
    useEffect(() => {
        axios
            .get(
                "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAmOD13ssjwWQ0qhvyHCUruhuhVKmQtF_8"
            )
            .then(res => {

                setState({
                    ...state, fonts: res.data.items
                });
            });
    }, []);

    console.log(state)


    const GoogleLorader = () => {
        if (state.fonts.length < 1) {
            return <p>No matching content</p>
        }

        const rawFonts = [...state.fonts].filter((font) => {

            if (!state.filter || font.family.toLowerCase().includes(state.filter.toLocaleLowerCase())) {
                return font
            }
        })

        const resultFonts = rawFonts.length > 40 ? rawFonts.slice(0, 40) : rawFonts
        return resultFonts.map(f => {
            return (
                <>
                    <GoogleFontLoader
                        fonts={[
                            {
                                font: `${f.family}`,
                                weights: [400, "400i"]
                            }
                        ]}
                        subsets={[`${f.subsets}`]}
                    />
                    {/* <p style={{fontFamily: `${f.family}`}}>This is dynamic</p> */}

                    <Card key={`${f.family}`} myFont={`${f.family}`} />
                    <br />
                </>
            );
        })

    }

    const searchHandler = (value) => {
        setState({ ...state, filter: value })
        console.log('called')
    }


    return (<div className={classes.appContainer}>
        <Grid container spacing={'0'} className={classes.topNav}>
            <Grid item xs={8}>GoogleFont</Grid>
            <Grid item xs={4} className={classes.TopRightMenu}>CATALOG FEATURED ARTICLES ABOUT</Grid>
        </Grid>
        <div className={classes.mainContainer}>
            <ToolBar searchHandler={searchHandler} />
            <Grid container direction="row" spacing={1}>
                {GoogleLorader()}
            </Grid>
        </div>
        <div className={classes.foot}>Coded by Luke Lyu |2019| Chingu Pre-Work Project</div>
    </div>
    );
};