import React from "react";
import { Label } from "../ui/label";
import { has_item_enum } from "@/utils";
import { DashboardItem } from "@/types";
import { Dashboard } from "./dashboard";
import { CrumbsComponent } from "../crumbs";
import { Client } from "../walk_in";


export function ActivityArea({
  dashboardItem,
}: {
  dashboardItem: DashboardItem | null;
}) {
  return (
    <div 
      className="flex flex-col"
    >
      <Label 
      >
        {
          has_item_enum(DashboardItem, dashboardItem) ??
          "Select item in dashboard"
        }
      </Label>
      {
        dashboardItem == DashboardItem.WalkIn ? (
          <>
            <CrumbsComponent 
              item={dashboardItem}
            >
            </CrumbsComponent>
            <Client />
          </>
        ) : (
          <></>
        )
      }
    </div>
  );
}