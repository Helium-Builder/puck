import { Drawer, Puck } from "@/core";
import React from "react";
import LeftDrawerComponentList from "./LeftDrawerComponentList";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/tabs";

export const LeftDrawer = () => {
  return (
    <div className="p-2">
      <Tabs>
        <TabsList>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="outline">Outline</TabsTrigger>
        </TabsList>
        <TabsContent value="components">
          <Drawer>
            <LeftDrawerComponentList />
          </Drawer>
        </TabsContent>
        <TabsContent value="outline">
          <Puck.Outline />
        </TabsContent>
      </Tabs>
    </div>
  );
};
