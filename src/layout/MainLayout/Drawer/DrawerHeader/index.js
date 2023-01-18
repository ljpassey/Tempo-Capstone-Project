import PropTypes from "prop-types";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Stack, Typography, Paper } from "@mui/material";
import { blue } from "@mui/material/colors";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

// project import
import DrawerHeaderStyled from "./DrawerHeaderStyled";

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  const color = blue[200]

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack>
        {open ? (
          <Typography variant="h2" sx={{ mt: 1 }}>
            Tempo
          </Typography>
        ) : (
          <Paper
            elevation={3}
            sx={{ m: 1, px: 1, borderRadius: 3 }}
          >
            <Typography variant="h1" sx={{ p: 0.5 }}>
              T
            </Typography>
          </Paper>
        )}
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool,
};

export default DrawerHeader;
