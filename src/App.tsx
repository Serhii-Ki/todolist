import {useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline'
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/Sidebar";
import AddNewTodoList from "./pages/addTodoListPage/AddNewTodoList";
import TodoListsPage from "./pages/todoListsPage/TodoListsPage";

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
            <Grid item xs={2}>
              <Sidebar/>
            </Grid>
            <Grid item xs={9} mt={'30px'} direction="column" justifyContent="center" alignItems="center">
              <TodoListsPage/>
            </Grid>
          </Grid>
        </ ThemeProvider >
  )
}

export default App
