import React, { createContext } from "react";
import usePuckLayout, { IPuckLayout } from "../_hooks/usePuckLayout";

type IProps = {
  children: React.ReactNode;
};

export const puckContext = createContext<IPuckLayout | null>(null);

const PuckLayout = ({ children }: IProps) => {
  const puckLayout = usePuckLayout();
  return (
    <puckContext.Provider value={puckLayout}>{children}</puckContext.Provider>
  );
};

export default PuckLayout;
