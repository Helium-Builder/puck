"use client";

import type { Data } from "@helium-builder/puck";
import { Render } from "@helium-builder/puck";
import config from "../../puck.config";

export function Client({ data }: { data: Data }) {
  return <Render config={config} data={data} />;
}
