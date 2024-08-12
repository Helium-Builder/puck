import { EOverrideFunctionId, usePuck } from "@/core";
import React from "react";
import { useEffect } from "react";

export const Handler = () => {
  const { updateOverride } = usePuck();

  // useEffect(() => {
  //   updateOverride(
  //     EOverrideFunctionId.onDragEnd,
  //     ({ droppableItem, appState, dispatch }: any) => {
  //       return true;
  //     }
  //   );
  // }, [updateOverride]);

  return null;
};
