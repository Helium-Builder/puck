"use client";
import { usePuck } from "@/core";
import React, { useMemo } from "react";

const usePuckLayout = () => {
  const { config } = usePuck();

  const components = useMemo(() => {
    const categories = config?.categories || [];
    const components = config?.components || [];
    const componentMap = new Map<string, { id: number; name: string }>();

    Object.keys(components).forEach((key, index) => {
      componentMap.set(key, {
        id: index,
        name: key,
      });
    });
    const newCategories = Object.keys(categories).map((key) => {
      const components = categories[key].components;

      const newComponents = components.map((component) => {
        return componentMap.get(component);
      });

      return {
        id: key,
        name: key,
        components: newComponents,
      };
    });

    return newCategories;
  }, [config]);

  return {
    components,
  };
};

export default usePuckLayout;

export type IPuckLayout = ReturnType<typeof usePuckLayout>;
