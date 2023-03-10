import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Pay" },
    { key: 1, label: "Type" },
    { key: 2, label: "Distance" },
    { key: 3, label: "Availability" },
  ]);

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
        borderRadius: 3,
        bgcolor: "white",
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;
        let color;

        if (data.key % 2 === 0) {
          icon = <CheckBoxOutlineBlankIcon />;
          color = "secondary";
        } else {
          color = "primary";
          icon = <CheckBoxIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              color={color}
              label={data.label}
              sx={{ borderRadius: 2 }}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
