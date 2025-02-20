import { FC } from "react";
import { Drawer,  List, ListItem, ListItemText } from "@mui/material";

interface DrawerProps {
    open: boolean;
    onClose: () => void;
}
 const  TemporaryDrawer : FC<DrawerProps> = ({open,onClose}) =>{

  return (
    <>
      
      <Drawer anchor="left" open={open} onClose={()=>onClose()}>
        <List sx={{ width: 250 }}>
          {["Главная", "О нас", "Контакты"].map((text, index) => (
            <ListItem  key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
export default TemporaryDrawer;