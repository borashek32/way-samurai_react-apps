import React from 'react'
import {Link} from "@mui/material";
import {pink} from "@mui/material/colors";


type NavbarLinkType = {
  name: string
  href: string
  onClose: () => void
}

export const NavbarLink: React.FC<NavbarLinkType> = ({name, href, onClose}) => {
  return (
    <>
      <Link
        onClick={onClose}
        href={href}
        underline={"none"}
        sx={{
          my: 4,
          width: "100%",
          color: '#0A1929FF',
          fontWeight: 600,
          fontSize: "14px",
          display: 'block',
          textTransform: "uppercase",
          "&:hover": {color: pink[500]},
          '@media (max-width: 900px)': {
            color: '#fff',
            fontSize: "20px",
            marginRight: 0
          },
          whiteSpace: "nowrap",
          marginRight: "15px"
        }}
      >{name}</Link>
    </>
  )
}