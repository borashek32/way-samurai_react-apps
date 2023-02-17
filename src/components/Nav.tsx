import * as React from 'react';
import {NavLink} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {pink} from '@mui/material/colors';
import SvgIcon, {SvgIconProps} from '@mui/material/SvgIcon';
import {Link} from "@mui/material";


export const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function HomeIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </SvgIcon>
    );
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#76ecfa'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: "flex", justifyContent: 'space-between'}}>
          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color: '#0A1929FF'}}
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              <Button
                sx={{my: 2, color: '#0A1929FF', display: 'block'}}
              >
                About
              </Button>
              <Button
                sx={{my: 2, color: '#0A1929FF', display: 'block'}}
              >
                My Skills
              </Button>
              <Button
                sx={{my: 2, color: '#0A1929FF', display: 'block'}}
              >
                My Apps
              </Button>
              <Button
                sx={{my: 2, color: '#0A1929FF', display: 'block'}}
              >
                Hire Me
              </Button>
            </Menu>
          </Box>
          <NavLink to="/way-samurai_react-apps">
            <HomeIcon sx={{color: pink[500], marginRight: '10px'}}/>
          </NavLink>
          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'flex'}}}>
            <Link
              href={"#aboutMe"}
              sx={{my: 2, color: '#0A1929FF', display: 'block'}}
            >
              About
            </Link>
            <Link
              sx={{my: 2, color: '#0A1929FF', display: 'block'}}
            >
              My Skills
            </Link>
            <Link
              href={"#myApps"}
              sx={{my: 2, color: '#0A1929FF', display: 'block'}}
            >
              My Apps
            </Link>
            <Link
              href={"#hireMe"}
              sx={{my: 2, color: '#0A1929FF', display: 'block'}}
            >
              Hire Me
            </Link>
            <Link
              href={"#contact"}
              sx={{my: 2, color: '#0A1929FF', display: 'block'}}
            >
              Contact
            </Link>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}