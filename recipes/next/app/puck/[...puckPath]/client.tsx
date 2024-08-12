"use client";

import type { Data } from "@helium-builder/puck";
import { Puck } from "@helium-builder/puck";
import config from "../../../puck.config";

export function Client({ path, data }: { path: string; data: Data }) {
  return (
    <Puck
      config={config}
      data={data}
      overrides={{
        components(props) {
            return <div>
              haskhu
            </div>
        },
      }}
      onPublish={async (data: Data) => {
        await fetch("/puck/api", {
          method: "post",
          body: JSON.stringify({ data, path }),
        });
      }}
    />
  );
}
