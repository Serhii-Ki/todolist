import {useState} from "react";
import {Outlet} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline'
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

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
        <CssBaseline />
        <Header changeModeHandler={changeModeHandler}/>
        <Grid container spacing={2}>
          <Grid item lg={2} sm={4}>
            <Sidebar/>
          </Grid>
          <Grid container item lg={8} sm={6} mt={'30px'} direction="column" justifyContent="center" alignItems="center">
            <Outlet/>
          </Grid>
        </Grid>
    </ ThemeProvider >
  )
}

export default App
