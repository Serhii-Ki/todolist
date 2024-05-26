import {Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import AssignmentIcon from '@mui/icons-material/Assignment';

function Sidebar() {
  return (

        <List>
            <ListItemButton>
              <AddToPhotosIcon sx={{opacity: '0.5', marginRight: '30px'}}/>
              <ListItemText primary='Add new todo list'/>
            </ListItemButton>
            <ListItemButton>
              <AssignmentIcon sx={{opacity: '0.5', marginRight: '30px'}}/>
              <ListItemText primary='My todo lists'/>
            </ListItemButton>
        </List>
  );
}

export default Sidebar;