import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { AppBar, Box, IconButton, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const settings = ["Profile", "Logout"];

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 7 }}>
              <Link to="/" style={{ textDecoration: 'none', color: "white" }}>Exercise Tracker</Link>
            </Typography>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Link to="/exercise" style={{ textDecoration: 'none'}}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Create Exercise
                </Button>
              </Link>
              <Link to="/log" style={{ textDecoration: 'none'}}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Workout Log
                </Button>
              </Link>
              <Link to="/createUser" style={{ textDecoration: 'none'}}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Create User
                </Button>
              </Link>
            </Box>
            <IconButton
              sx={{ p: 0 }}
              style={{ marginLeft: "2em" }}
              onClick={handleOpenUserMenu}
            >
              <Avatar alt="Nicolas Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
