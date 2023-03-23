import React from "react";
import * as Falcons from "react-icons/fa";
import * as Ailcons from "react-icons/ai";
import * as Iolcons from "react-icons/io";
import * as Rilcons from "react-icons/ri";

export const SlidebarData = [
  {
    title: "Generality",
    path: "/generality",
    icon: <Ailcons.AiFillCodeSandboxCircle />,
  },
  {
    title: "List Employee",
    path: "/listemployee",
    icon: <Iolcons.IoIosPeople />,
  },
  {
    title: "Salary",
    path: "/salary",
    icon: <Falcons.FaMoneyBill />,
    iconClosed: <Rilcons.RiArrowDownSLine />,
    iconOpnened: <Rilcons.RiArrowUpSLine />,
    subNav: [
      {
        title: "Table Salary",
        path: "/salary-table",
        icon: <Ailcons.AiFillMoneyCollect />,
      },
      {
        title: "Individual Salary",
        path: "/salary-individual",
        icon: <Falcons.FaMoneyBillAlt />,
      },
      {
        title: "Salary Step",
        path: "/salary-step",
        icon: <Iolcons.IoIosPeople />,
      },
    ],
  },
];
