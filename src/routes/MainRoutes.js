import { lazy } from "react";

// project import
import Loadable from "components/Loadable";
import MainLayout from "layout/MainLayout";

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import("pages/dashboard")));
const Calendar = Loadable(lazy(() => import("pages/calendar")));
const Kanban = Loadable(lazy(() => import("pages/kanban")));
const Jobs = Loadable(lazy(() => import("pages/jobs")));
const CreateJob = Loadable(lazy(() => import("pages/create-job")));
const Profile = Loadable(lazy(() => import("pages/profile")));
// const Job = Loadable(lazy(() => import("pages/jobs/:id")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },

    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <DashboardDefault />,
        },
        {
          path: "calendar",
          element: <Calendar />,
        },
        {
          path: "kanban",
          element: <Kanban />,
        },
        {
          path: "jobs",
          element: <Jobs />,
        },
        {
          path: "/dashboard/jobs/:id",
          element: <Jobs />,
        },
        {
          path: "create-job",
          element: <CreateJob />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
  ],
};

export default MainRoutes;
