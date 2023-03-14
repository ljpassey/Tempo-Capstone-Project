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
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ViewKanbanOutlinedIcon from "@mui/icons-material/ViewKanbanOutlined";

// icons
const icons = {
  HomeOutlined,
  CompassOutlined,
  LoginOutlined,
  ProfileOutlined,
  AccountCircleOutlinedIcon,
  UserOutlined,
  CalendarMonthOutlinedIcon,
  ViewKanbanOutlinedIcon
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
      id: "calendar",
      title: "Calendar",
      type: "item",
      url: "/dashboard/calendar",
      icon: icons.CalendarMonthOutlinedIcon,
      breadcrumbs: false,
    },
    {
      id: "kanban",
      title: "Kanban",
      type: "item",
      url: "/dashboard/kanban",
      icon: icons.ViewKanbanOutlinedIcon,
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
