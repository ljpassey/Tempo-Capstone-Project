// project import

import Navigation from "./Navigation";
import SimpleBar from "components/third-party/SimpleBar";

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => (
  <SimpleBar
    sx={{
      "& .simplebar-content": {
        display: "flex",
        height: "100%",
        justifyContent: 'center'
      },
    }}
  >
    <Navigation />
  </SimpleBar>
);

export default DrawerContent;
