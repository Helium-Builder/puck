# plugin-heading-analyzer

Visualise your heading outline structure and identify missing heading levels. Respects WCAG 2.

<img src="https://i.imgur.com/POqtgHu.jpg" alt="example" width="156px" />

## Quick start

```sh
npm i @helium-builder/puck-plugin-heading-analyzer
```

```jsx
import { Puck } from "@helium-builder/puck";
import headingAnalyzer from "@helium-builder/puck-plugin-heading-analyzer";
import "@helium-builder/puck-plugin-heading-analyzer/dist/index.css";

...

// Render Puck
export function Page() {
  return <Puck
    config={config}
    data={data}
    plugins={[
        headingAnalyzer
    ]}
  />;
}
```

## License

MIT © [Measured Corporation Ltd](https://measured.co)
