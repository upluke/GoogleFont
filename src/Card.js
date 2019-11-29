import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
export default props => {
  const myFont = props.myFont
  const useStyles = makeStyles(theme => ({
    fontControl: {
      fontFamily: `${myFont}`
    },
    subFontControl: {
      fontSize: `${props.size}px`
    },
    card: {
      minHeight: '15rem',
      padding: '0.1rem',
      boxShadow: 'none'
    },
    cardHeader: {
      marginLeft: '1rem'
    },
    cardDivider: {
      height: '2px',
      backgroundColor: 'black',
      marginBottom: '1rem'
    },
    cardBody: {
      marginTop: '3rem'
    }
  }))
  const classes = useStyles()

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
            <AddCircleOutlineIcon color="error" />
          </Grid>

          <Grid container className={classes.cardBody}>
            <Typography
              variant="h5"
              component="p"
              className={classes.subFontControl}
            >
              {props.input ? props.input : 'This is a sample line.'}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}
