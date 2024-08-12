"use client";
import { Drawer, usePuck } from "@/core";
import React, { useContext } from "react";
import { puckContext } from "./PuckLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/accordion";

const LeftDrawerComponentList = () => {
  const { components } = useContext(puckContext);
  return (
    <div>
      <Accordion type="multiple">
        {components.map((component, key) => {
          return (
            <AccordionItem key={key} value={component.id}>
              <AccordionTrigger>{component.name}</AccordionTrigger>
              <AccordionContent>
                {component.components.map((component, key) => {
                  return (
                    <Drawer.Item
                      index={component.id}
                      name={component.name}
                      key={key}
                    />
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default LeftDrawerComponentList;
