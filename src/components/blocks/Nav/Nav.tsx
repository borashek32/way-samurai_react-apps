import * as React from 'react';
import s from "./Nav.module.sass"
import {NavLink} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import {pink} from '@mui/material/colors';
import SvgIcon, {SvgIconProps} from '@mui/material/SvgIcon';
import {NavbarLink} from "../utils/NavbarLink";
import {createTheme, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {LinkType} from "../../../store/main/main-reducer";
import {useState} from "react";


export const Nav = () => {

  const links = useSelector<AppRootStateType, Array<LinkType>>(state => state.main.links)

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const [active, setActive] = useState(false)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    setActive(true)
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setActive(false)
  };

  const mappedLinks = links.map(link => {
    return (
      <div key={link.href}>
        <NavbarLink
          onClose={handleCloseNavMenu}
          href={link.href}
          name={link.name}
        />
      </div>
    )
  })

  const theme = createTheme({
    components: {
      MuiMenu: {
        styleOverrides: {
          root: {
            backgroundColor: '#0A1929FF',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            '@media (max-width: 900px)': {
              overflow: "scroll"
            }
          },
          paper: {
            backgroundColor: "transparent !important",
            boxShadow: "none !important",
            top: "50% !important",
            left: "50% !important",
            margin: "-25% 0 0 -5% !important",
            textAlign: "center",
            overflow: "scroll",
            '@media (max-width: 900px)': {
              margin: "-50% 0 0 -17% !important",
            }
          }
        }
      }
    }
  })

  function HomeIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </SvgIcon>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" sx={{
        backgroundColor: '#76ecfa',
        position: 'fixed',
        zIndex: 1000000
      }}>
        <div style={{display: "flex", alignItems: "center"}}>

          {/*burger*/}
          <div
            className={active ? (s.burger + ' ' + s.active) : s.burger}
            onClick={active ? handleCloseNavMenu : handleOpenNavMenu}
          >
            <span></span>
          </div>

          {/*small navbar*/}
          <Box sx={{
            flexGrow: 1,
            display: {xs: 'flex', md: 'none'},
            padding: "20px",
            justifyContent: "space-between"
          }}>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{display: {xs: 'block', md: 'none'}, margin: 0}}
            >
              {mappedLinks}
            </Menu>
          </Box>

          {/*big navbar*/}
          <Box sx={{justifyContent: "right", display: {xs: 'none', md: 'flex'}}}>

            {/*home icon*/}
            <NavLink to="#aboutMe">
              <HomeIcon sx={{color: pink[500], margin: '25px 20px 20px 20px'}}/>
            </NavLink>

            {mappedLinks}
          </Box>
        </div>
      </AppBar>
    </ThemeProvider>
  )
}