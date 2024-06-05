import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SwitchTheme from "../switch/Switch";

type HeaderPropsType = {
  changeModeHandler: () => void,
}

function Header(props: HeaderPropsType) {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My task tracker
            </Typography>
            <SwitchTheme changeModeHandler={props.changeModeHandler}/>
          </Toolbar>
        </AppBar>
      </Box>
  );
}

export default Header;