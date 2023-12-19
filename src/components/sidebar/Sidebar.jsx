import styles from "./Sidebar.module.css";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => {
    setSidebar(true);
  };
  const hideSideBar = () => {
    setSidebar(false);
  };

  return (
    <>
      <div
        id="mySidenav"
        className={`${styles.sidenav} ${sidebar ? '' : styles.closed}`}
        onMouseEnter={showSideBar}
        onMouseLeave={hideSideBar}
      >
        <Link to="/">
          <HomeIcon />
          {sidebar && (
            <Typography variant="h6" gutterBottom>
              Home
            </Typography>
          )}
        </Link>
        <Link to="search">
          <SearchIcon />
          {sidebar && (
            <Typography variant="h6" gutterBottom>
              Buscar
            </Typography>
          )}
        </Link>
        <Link to="mylist">
          <FolderSpecialIcon />
          {sidebar && (
            <Typography variant="h6" gutterBottom>
              Minha Lista
            </Typography>
          )}
        </Link>
        <Link to="profile">
          <AccountCircleIcon />
          {sidebar && (
            <Typography variant="h6" gutterBottom>
              Meu Perfil
            </Typography>
          )}
        </Link>
      </div>
      <div className={`${styles.content} ${sidebar ? `${styles.overlay}` : ''}`}>
        <Outlet/>
      </div>
    </>
  );
};

export default Sidebar;
