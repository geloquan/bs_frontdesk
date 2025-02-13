//import { useState } from "react";
//import { invoke } from "@tauri-apps/api/core";
import './index.css'
import React from "react";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Dashboard } from "./components/view/dashboard";
import { Label } from "./components/ui/label";
import { ActivityArea } from "./components/view/activity_area";
import { CollapsibleTrigger, Collapsible, CollapsibleContent } from './components/ui/collapsible';
import { DashboardItem } from './types';

function App() {
  const [dashboardItem, setDashboardItem] = useState(DashboardItem);

  return (
    <div className="flex flex-row items-start bg-red-100">
      <div className='flex-col justify-start' id='dashboard'>
        <h1
          className='justify-self-center'
        >
          dashboard
        </h1>
        <Dashboard setDashboardItem={setDashboardItem}></Dashboard>
      </div>
      <div
        className='flex w-full h-svh justify-center'
        id='activity-area'
      >
        <ActivityArea 
          dashboardItem={dashboardItem}
        >
        </ActivityArea>
      </div>
    </div>
  );
}

export default App;
