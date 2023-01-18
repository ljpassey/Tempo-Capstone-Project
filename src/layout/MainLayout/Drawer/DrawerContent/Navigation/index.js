// material-ui
import { Box, Typography } from "@mui/material";

// project import
import NavGroup from "./NavGroup";
import menuItem from "menu-items";

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
  const navGroups = menuItem.items.map((item) => {
    switch (item.type) {
      case "group":
        return <NavGroup sx={{ height: "100%", display: 'flex', justifyContent: 'space-between' }} key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Error
          </Typography>
        );
    }
  });

  return <Box >{navGroups}</Box>;
};

export default Navigation;
