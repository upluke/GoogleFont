import React, { useState } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import InputBase from '@material-ui/core/InputBase'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined'
import ListIcon from '@material-ui/icons/List'
import BorderAllIcon from '@material-ui/icons/BorderAll'
import RefreshIcon from '@material-ui/icons/Refresh'
import { useTheme } from './ThemeContext'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  appBar: {
    borderRadius: '120px',
    backgroundColor: 'white'
  },
  marginLeft: {
    marginLeft: '10%'
  }
}))

export default props => {
  const themeState = useTheme()
  const classes = useStyles()
  const [input, setInput] = useState('')
  const [size, setSize] = useState('')
  const [clicker, setCliker] = useState(false)
  props.getInput(input) //pass input up to contianer
  props.getSize(size) //pass size up to container

  const resetHandler=()=>{  //clean out 1st,2nd input and lights
    props.searchHandler('')  
    themeState.reset()
    setInput('')
  }
  return (
    <div className={classes.grow}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <div className={classes.search}>
            <InputBase
              value={props.filter}
              onChange={e => {
                props.searchHandler(e.target.value)
              }}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <div>
            <InputBase
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type something...."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <div>
            <Select
              value={size}
              onChange={e => setSize(e.target.value)}
              disableUnderline
            >
              <MenuItem value={20}>20px</MenuItem>
              <MenuItem value={24}>24px</MenuItem>
              <MenuItem value={32}>32px</MenuItem>
              <MenuItem value={40}>40px</MenuItem>
            </Select>
          </div>

          <div className={classes.marginLeft}>
            <FiberManualRecordIcon
              onClick={() => themeState.toggle()}
              fontSize="small"
            />
            <FiberManualRecordOutlinedIcon
              onClick={() => themeState.toggle()}
              fontSize="small"
            />
          </div>

          <div
            onClick={() => setCliker(!clicker)}
            className={classes.marginLeft}
          >
            {!clicker ? (
              <ListIcon fontSize="small" />
            ) : (
              <BorderAllIcon fontSize="small" />
            )}
          </div>

          <div className={classes.marginLeft}>
            <RefreshIcon
              fontSize="small"
              onClick={()=>resetHandler()}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
