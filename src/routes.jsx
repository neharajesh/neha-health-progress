import { Icon } from "@chakra-ui/react";
import { MdBarChart, MdHome } from "react-icons/md";

// Admin Imports
import MainDashboard from "./views/default";
import DataTables from "./views/dataTables";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: "Data Tables",
    layout: "/data",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/data-tables",
    component: <DataTables />,
  },
];

export default routes;
