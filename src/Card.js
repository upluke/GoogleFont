import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { FontContext } from "./AppContainer";
import AddCircleIcon from "@material-ui/icons/AddCircle";
export default (props) => {
    const myFont = props.myFont
    const useStyles = makeStyles(theme => ({
        fontControl: {
            fontFamily: `${myFont}`
        },
        gridControl: {
            display: "grid",
            flexGrow: 1,
            gridGap: theme.spacing(2)
        },
        fabControl: {
            left: theme.spacing(15),
            bottom: theme.spacing(4)
        },
        card: {
            minHeight: "15rem",
            padding: "0.1rem",
            boxShadow: "none"
        },
        cardHeader: {
            marginLeft: "1rem"
        },
        cardDivider: {
            height: "2px",
            backgroundColor: "black",
            marginBottom: "1rem"
        },
        cardBody: {
            marginTop: "3rem"
        }
    }));
    const classes = useStyles();

    return (
        <Grid item xs={3}>
            <Card className={classes.card}>
                <CardContent>
                    <div className={classes.cardDivider} />
                    <Grid container spacing="1">
                        <Grid item xs="10">
                            <Typography
                                variant="h6"
                                component="h2"
                                className={classes.fontControl}
                            >
                                {myFont}
                            </Typography>
                        </Grid>
                        <AddCircleIcon />
                    </Grid>
                    <Grid container>
                        <Typography color="textSecondary" variant="body2" component="p">
                            well meaning and kindly.
            </Typography>
                    </Grid>
                    <Grid container className={classes.cardBody}>
                        <Typography
                            variant="h5"
                            component="p"
                            className={classes.fontControl}
                        >
                            font content
            </Typography>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};