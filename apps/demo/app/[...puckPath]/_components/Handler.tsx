import { usePuck } from "@/core";
import React from "react";
import { useEffect } from "react";

export const Handler = () => {
  const { updateOverride } = usePuck();

  useEffect(() => {
    updateOverride(
      "onDragEnd",
      ({ droppableItem, appState, dispatch }: any) => {
        
        return true;
      }
    );
  }, [updateOverride]);

  return <div>Handler</div>;
};
