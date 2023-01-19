import { lazy } from "react";

// project import
import Loadable from "components/Loadable";
import MainLayout from "layout/MainLayout";


// render - dashboard
const DashboardDefault = Loadable(lazy(() => import("pages/dashboard")));
const Jobs = Loadable(lazy(() => import("pages/jobs")));
const CreateJob = Loadable(lazy(() => import("pages/create-job")));
const Profile = Loadable(lazy(() => import("pages/profile")));
// const Job = Loadable(lazy(() => import("pages/jobs/:id")))

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
          path: "jobs",
          element: <Jobs />,
          children: [
            // {
            //     path: ":id",
            //     element: <Job />
            // }
          ]
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
