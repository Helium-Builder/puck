import React, { useCallback, useMemo, useState } from "react";
import {
  EOverrideFunctionId,
  OverrideFunction,
  OverrideState,
} from "../types/Overrides";

export const useFunctionOverride = () => {
  const [override, setOverride] = useState<OverrideState>(
    {} as {
      [key: string]: (...args) => boolean;
    }
  );

  const updateOverride = useCallback(
    (id: EOverrideFunctionId, fn: OverrideFunction) => {
      setOverride((prevOverride) => ({
        ...prevOverride,
        [id]: fn,
      }));
    },
    [setOverride]
  );

  return {
    override,
    updateOverride,
  };
};
