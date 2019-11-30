import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import theme from './theme.js'

const defaultContextData = {
  dark: false,
  toggle: () => {},
  reset: () => {}
}

const ThemeContext = React.createContext(defaultContextData)
const useTheme = () => React.useContext(ThemeContext)

const defaultThemeState = {
  dark: false,
  hasThemeMounted: false
}

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = React.useState({ ...defaultThemeState })
  React.useEffect(() => {
    if (!themeState.hasThemeMounted) {
      const lsDark = localStorage.getItem('dark') === 'true'
      setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true })
    }
  }, [themeState])

  return [themeState, setThemeState]
}

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode()

  if (!themeState.hasThemeMounted) {
    return <div />
  }

  const toggle = () => {
    const dark = !themeState.dark
    localStorage.setItem('dark', JSON.stringify(dark))
    setThemeState({ ...themeState, dark })
  }

  const reset = () => { 
    const dark = !themeState.dark
    localStorage.setItem('dark', JSON.stringify(dark))
    setThemeState({ ...themeState, dark })

  }

  const computedTheme = themeState.dark ? theme('dark') : theme('light')

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggle,
          reset
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  )
}

export { ThemeProvider, useTheme }
