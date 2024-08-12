"use client";

import { Button, Data, Puck, Render } from "@/core/index";
import headingAnalyzer from "@/plugin-heading-analyzer/src/HeadingAnalyzer";
import config, { UserConfig } from "../../config";
import { useDemoData } from "../../lib/use-demo-data";
import { LeftDrawer } from "./_components/LeftDrawer";
import { Handler } from "./_components/Handler";
import PuckLayout from "./_components/PuckLayout";
import RightDrawer from "./_components/RightDrawer";

export function Client({ path, isEdit }: { path: string; isEdit: boolean }) {
  const { data, resolvedData, key } = useDemoData({
    path,
    isEdit,
  });

  console.log(Puck);

  if (isEdit) {
    return (
      <div>
        <Puck
          config={config}
          data={data}
          onPublish={async (data: Data) => {
            localStorage.setItem(key, JSON.stringify(data));
          }}
          plugins={[headingAnalyzer]}
          headerPath={path}
        >
          <div
            style={{
              height: "100vh",
              display: "grid",
              gridTemplateColumns: "200px 1fr 200px",
            }}
          >
            <PuckLayout>
              <LeftDrawer />
              <Puck.Preview />
              <RightDrawer />
              <Handler />
            </PuckLayout>
          </div>
        </Puck>
      </div>
    );
  }

  if (data) {
    return <Render<UserConfig> config={config} data={resolvedData} />;
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>404</h1>
        <p>Page does not exist in session storage</p>
      </div>
    </div>
  );
}

export default Client;
