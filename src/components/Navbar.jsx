import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import {
  AddCircle,
  AddModerator,
  AdminPanelSettings,
  BookmarkAdd,
  Logout,
  LunchDining,
  ShoppingCart,
  StarOutline,
  StarPurple500Outlined,
  Stars,
  SwitchAccessShortcutAdd,
} from "@mui/icons-material";

import styled from "styled-components";
import { clientContext } from "../contexts/ClinentContext";

//! Styled Components

const AdminButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  margin: 0px 70px;
`;

//! end of styled

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const data = React.useContext(clientContext);
  const { cartCount, authWithGoogle, user, logOut } = data;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
      <AppBar position="sticky" className="app-bar">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Link to="/">
                <StarPurple500Outlined className="logoAnimation" />
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Link to="/admin-panel">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/admin-panel">
                      <AdminButton textAlign="center">
                        <Stars className="color-black" />
                      </AdminButton>
                    </Link>
                    <Link to="/admin-panel-add">
                      <Typography textAlign="center">
                        <AddCircle className="color-black" />
                      </Typography>{" "}
                    </Link>

                    <Link
                      to="/cart"
                      style={({ marginRight: 70 }, { marginLeft: 70 })}
                    >
                      <Badge badgeContent={cartCount} color="default">
                        <LunchDining className="color-black" />
                      </Badge>
                    </Link>

                    <Link to="/favorite" style={{ marginRight: 10 }}>
                      <Badge color="default" badgeContent={cartCount}>
                        <LunchDining className="color-black" />
                      </Badge>
                    </Link>
                  </MenuItem>
                </Link>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Link to="/">
                <StarPurple500Outlined className="logoAnimation" />
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="/admin-panel">
                <AdminButton sx={{ my: 2, color: "white", display: "block" }}>
                  <Stars className="logoAnimation" />
                </AdminButton>
              </Link>
              <Link to="/admin-panel-add">
                <AdminButton sx={{ my: 2, color: "white", display: "block" }}>
                  <AddCircle className="logoAnimation" />
                </AdminButton>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="/favorite" style={{ marginRight: 10 }}>
                <Badge color="default" badgeContent={cartCount}>
                  <LunchDining className="logoAnimation" />
                </Badge>
              </Link>
            {/* </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}> */}
              <Link
                to="/cart"
                style={({ marginRight: 70 }, { marginLeft: 70 })}
              >
                <Badge badgeContent={cartCount} color="default">
                  <StarOutline className="logoAnimation" />
                </Badge>
              </Link>
            </Box>
            <Box
              style={{ display: "flex", alignItems: "center" }}
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {user ? (
                <>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                  >
                    <Avatar style={{ marginRight: 8 }} src={user.photoURL} />
                  </Box>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                    <span className="userName">{user.email}</span>
                  </Box>
                  <Button onClick={logOut}>
                    <Logout color="inherit" className="logoutColor" />
                  </Button>
                </>
              ) : (
                <Button
                  className="buttonMargon"
                  onClick={authWithGoogle}
                  variant="outlined"
                  color="inherit"
                >
                  ??????????
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};
export default Navbar;
