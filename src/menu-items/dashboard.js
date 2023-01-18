// assets
import {
  HomeOutlined,
  CompassOutlined,
  LoginOutlined,
  ProfileOutlined,
  PlusCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

// icons
const icons = {
  HomeOutlined,
  CompassOutlined,
  LoginOutlined,
  ProfileOutlined,
  AccountCircleOutlinedIcon,
  UserOutlined,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: "group-dashboard",
  title: "Navigation",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/dashboard/default",
      icon: icons.HomeOutlined,
      breadcrumbs: false,
    },
    {
      id: "jobs",
      title: "Jobs",
      type: "item",
      url: "/dashboard/jobs",
      icon: WorkOutlineOutlinedIcon,
      breadcrumbs: false,
    },
    {
      id: "create-job",
      title: "Create a Job",
      type: "item",
      url: "/dashboard/create-job",
      icon: PlusCircleOutlined,
      breadcrumbs: false,
    },
    {
      id: "profile",
      title: "Profile",
      type: "item",
      url: "/dashboard/profile",
      icon: icons.UserOutlined,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
