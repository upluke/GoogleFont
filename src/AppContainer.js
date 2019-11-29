import React, {useState, useEffect} from 'react'
import axios from 'axios'
import GoogleFontLoader from 'react-google-font-loader'
import Card from './Card'
import Grid from '@material-ui/core/Grid'
import ToolBar from './ToolBar'

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  appContainer: {
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center'
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '93%',
    padding: '3rem 3rem 3rem 3rem'
  },
  foot: {
    marginTop: '2rem',
    borderTop: '1px black solid',
    textAlign: 'center',
    padding: '2rem'
  }
}))

export default () => {
  const classes = useStyles()
  const [state, setState] = useState({fonts: [], amount: 100, filter: ''})

  const [input, setInput] = useState('') //for receiving input from toolbar
  const [size, setSize] = useState() //for receiving size from toolbar

  const getInput = input => {
    setInput(input)
  }
  const getSize = size => {
    setSize(size)
  }
  useEffect(() => {
    axios
      .get(
        'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAmOD13ssjwWQ0qhvyHCUruhuhVKmQtF_8'
      )
      .then(res => {
        setState({
          ...state,
          fonts: res.data.items
        })
      })
  }, [])

  const GoogleLorader = () => {
    if (state.fonts.length < 1) {
      return <p>No matching content</p>
    }
    const filteredFonts = [...state.fonts].filter(font => {
      if (
        !state.filter ||
        font.family.toLowerCase().includes(state.filter.toLocaleLowerCase())
      ) {
        return font
      }
    })

    const resultFonts =
      filteredFonts.length > 40 ? filteredFonts.slice(0, 40) : filteredFonts
    return resultFonts.map(f => {
      return (
        <>
          <GoogleFontLoader
            fonts={[
              {
                font: `${f.family}`,
                weights: [400, '400i']
              }
            ]}
            subsets={[`${f.subsets}`]}
          />
          {/* <p style={{fontFamily: `${f.family}`}}>This is dynamic</p> */}

          <Card
            key={`${f.family}`}
            myFont={`${f.family}`}
            input={input}
            size={size}
          />
          <br />
        </>
      )
    })
  }

  const searchHandler = value => {
    setState({...state, filter: value})
  }
  const resetHandler = () => {
    setState({...state, filter: ''})
  }

  return (
    <div className={classes.appContainer}>
      <div className={classes.mainContainer}>
        <ToolBar
          getInput={getInput}
          getSize={getSize}
          searchHandler={searchHandler}
          resetHandler={resetHandler}
        />

        <Grid container direction="row" spacing={1} style={{marginTop:'35px'}}>
          {GoogleLorader()}
        </Grid>
      </div>
      <div className={classes.foot}>
        Coded by Luke Lyu |2019| Chingu Pre-Work Project
      </div>
    </div>
  )
}
