import { Drawer, Puck } from "@/core";
import React from "react";

export const LeftDrawer = () => {
  return (
    <div>
      <Drawer>
        <Drawer.Item index={789979879789} name="group::AUTHSECTION" />
      </Drawer>
      {/* <Puck.Components /> */}
    </div>
  );
};
