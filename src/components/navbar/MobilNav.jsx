import logo from "../../images/Logo.png";
import menu from "../../images/textalign-right.png";
import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";

import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import { navLinks } from "../../constants";

const MobilNav = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="mobil min-[850px]:hidden flex h-[72px] bg-[#1B1C37] px-10 py-5 rounded-lg">
      <div className="container flex justify-between items-center">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menuIcon cursor-pointer">
          <React.Fragment>
            <IconButton
              variant="outlined"
              color="neutral"
              onClick={() => setOpen(true)}
            >
              <img src={menu} alt="logo" />
            </IconButton>
            <Drawer open={open} onClose={() => setOpen(false)}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  ml: "auto",
                  mt: 1,
                  mr: 2,
                }}
              >
                <ModalClose id="close-icon" sx={{ position: "initial" }} />
              </Box>

              <List
                size="lg"
                component="nav"
                sx={{
                  flex: "none",
                  fontSize: "xl",
                  "& > div": { justifyContent: "center" },
                }}
              >
                {navLinks.map((link) => (
                  <ListItemButton
                    as={"a"}
                    key={link.title}
                    onClick={() => setOpen(false)}
                  >
                    {link.title}
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
};

export default MobilNav;
