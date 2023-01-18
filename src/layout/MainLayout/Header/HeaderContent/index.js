import React from "react";
import { useTheme } from "@mui/material/styles";

// material-ui
import {
  Box,
  IconButton,
  Link,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { GithubOutlined } from "@ant-design/icons";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

// project import
import Search from "./Search";
import Profile from "./Profile";
import Notification from "./Notification";
import MobileSection from "./MobileSection";

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: "100%", ml: 2 }} />}
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === "light" ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        )}
      </IconButton>

      <IconButton
        component={Link}
        href="https://github.com/ljpassey/Tempo-Capstone-Project"
        target="_blank"
        disableRipple
        color="inherit"
      >
        <GithubOutlined />
      </IconButton>

      <Notification />
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
