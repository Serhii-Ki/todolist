import {useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import Header from "./components/header/header.tsx";


type ThemeModeType = 'light' | 'dark'

function App() {
  const [themeMode, setThemeMode] = useState<ThemeModeType>('light')

  const theme = createTheme({
    palette: {
      mode: themeMode === 'light' ? 'light' : 'dark',
      primary: {
        main: '#0928a8',
      },
    },
  })

  const changeModeHandler = () => {
    setThemeMode(themeMode == 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme}>
      <Header changeModeHandler={changeModeHandler}/>
    </ ThemeProvider >
  )
}

export default App
