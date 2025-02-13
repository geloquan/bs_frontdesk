import React from "react";
import beaker from "/src/assets/Beaker.svg";
import breifcase from "/src/assets/Briefcase.svg";
import users from "/src/assets/Users.svg";
import { Button } from "../ui/button";
import { DashboardItem } from "@/types";
import BuildingOffice from "/src/assets/BuildingOffice.svg"
import { UserPlus, SquareUser, Tags, Hotel } from "lucide-react"

const operations = [
  "Pre-Operation",
  "Intra-Operation",
  "Post-Operation"
]

const columns = [
  {
  icon: <UserPlus />,
  label: DashboardItem.WalkIn,
  },
  {
  icon: <SquareUser />,
  label: DashboardItem.Reservation,
  },
  {
  icon: <Tags />,
  label: DashboardItem.Checkout,
  },
  {
  icon: <Hotel />,
  label: DashboardItem.InHouse,
  },
];
  
export function Dashboard({
  setDashboardItem,
}: {
  setDashboardItem: (item: DashboardItem) => void; 
}) {
  return(
    <div 
      className="flex flex-col"
      id="dashboard-item-container"
      key={"dashboard-item-container"}
    >
      {columns.map((column, index) => (
        <div
          className="flex"
          key={`${index}-item`}
        >
          <Button
            key={index}
            className="uppercase w-full justify-start"
            onClick={() => setDashboardItem(column.label)}
            style={{gap: "17px"}}
          >
          {column.icon} {column.label}
          </Button>
        </div>
      ))}
    </div>
  )
} 