import React, { useState, createContext } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import InputBase from '@material-ui/core/InputBase'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined'
import ListIcon from '@material-ui/icons/List'
import BorderAllIcon from '@material-ui/icons/BorderAll'
import RefreshIcon from '@material-ui/icons/Refresh'

import ShowTyping from './ShowTyping'

export const TypingContext = createContext()

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
    // cardDivider: {
    //   height: '2px',
    //   backgroundColor: 'black',
    //   marginBottom: '1rem',
    //   borderLeft:"6px solid green"
    // }
}))

export default (props) => {
    const classes = useStyles()
    const [input, setInput] = useState('')
    const [size, setSize] = useState('')
    const [clicker, setCliker] = useState(false)

    return (
        <div className={classes.grow}>
            <AppBar position="static" color="default" className={classes.appBar}>
                <ToolBar>
                    <div className={classes.search}>
                        <InputBase
                            onChange={(e) => {
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
                    {/* <div className={classes.cardDivider} /> */}

                    <div>
                        <InputBase
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
                        <Select value={size} onChange={e => setSize(e.target.value)}>
                            <MenuItem value={20}>20px</MenuItem>
                            <MenuItem value={24}>24px</MenuItem>
                            <MenuItem value={32}>32px</MenuItem>
                            <MenuItem value={40}>40px</MenuItem>
                        </Select>
                    </div>

                    <div className={classes.marginLeft}>
                        <FiberManualRecordIcon fontSize="small" />
                        <FiberManualRecordOutlinedIcon fontSize="small" />
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
                        <RefreshIcon fontSize="small" />
                    </div>
                </ToolBar>
            </AppBar>

            <TypingContext.Provider value={input}>
                <ShowTyping />
            </TypingContext.Provider>
        </div>
    )
}
