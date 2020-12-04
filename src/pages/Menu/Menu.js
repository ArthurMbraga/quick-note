import {
  AppBar,
  Avatar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { IconContext } from "react-icons/lib";
import { MdHome, MdNoteAdd } from "react-icons/md";
import { FaTrash, FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import "./Menu.css";
import Context from "../../Contexts/Context";

function Menu(props) {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState("/home");
  const [open, setOpen] = useState(false);

  const { user } = useContext(Context);

  function handleClick(pathName) {
    history.push(pathName);
    setCurrentPage(pathName);
  }

  function handleDrawer(isOpen) {
    setOpen(isOpen);
  }

  const pages = [
    {
      pathName: "/home",
      icon: <MdHome />,
      text: "Minhas anotações",
      iconSize: "1.5em",
    },
    {
      pathName: "/",
      icon: <MdNoteAdd />,
      text: "Nova anotação",
      iconSize: "1.5em",
    },
    {
      pathName: "/",
      icon: <FaTrash />,
      text: "Arquivo",
      iconSize: "1.3em",
    },
    {
      pathName: "/profile",
      icon: <FaUser />,
      text: "Perfil",
      iconSize: "1.3em",
    },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "white" }}>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={() => handleDrawer(!open)}
          >
            <FiMenu />
          </IconButton>
          <div className="userContainer">
            <p className="userName">{user?.name}</p>
            <Avatar alt="John Doe" src="/images/Avatar.png" />
          </div>
        </Toolbar>
      </AppBar>
      {props.children}
      <Drawer open={open} onClose={() => handleDrawer(false)}>
        <List className="list">
          {pages.map((listItem, index) => {
            return (
              <ListItem
                key={index}
                button
                selected={currentPage === listItem.pathName}
                onClick={() => {
                  handleClick(listItem.pathName);
                }}
              >
                <IconContext.Provider
                  value={{ color: "#343434", size: listItem.iconSize }}
                >
                  {listItem.icon}
                </IconContext.Provider>
                <ListItemText className="listItemText">
                  <Typography>{listItem.text}</Typography>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

export default Menu;
