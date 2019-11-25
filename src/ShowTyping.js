import React, { useContext } from 'react'
import { TypingContext } from './ToolBar'

export default () => {
    const myTyping = useContext(TypingContext)
    return <p>{myTyping}</p>
}
