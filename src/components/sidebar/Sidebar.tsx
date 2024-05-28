import { List, ListItemButton, ListItemText} from "@mui/material";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Link} from "react-router-dom";
import {styled} from "@mui/material/styles";

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
  display: 'flex',
  alignItems: 'center'
});

function Sidebar() {
  return (
    <List>
      <StyledLink to='addtodo'>
        <ListItemButton>
          <AddToPhotosIcon sx={{opacity: '0.5', marginRight: '30px'}}/>
          <ListItemText primary='Add new todo list'/>
        </ListItemButton>
      </StyledLink>
      <StyledLink to='todolists'>
        <ListItemButton>
          <AssignmentIcon sx={{opacity: '0.5', marginRight: '30px'}}/>
          <ListItemText primary='My todo lists'/>
        </ListItemButton>
      </StyledLink>
    </List>
  );
}

export default Sidebar;