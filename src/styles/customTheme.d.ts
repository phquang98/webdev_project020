import "styled-components";

import { customTheme } from ".";

declare module "styled-components" {
  type TCustomTheme = typeof customTheme;

  export interface DefaultTheme extends TCustomTheme {
    uselessProp?: string;
  }
}

// https://blog.agney.dev/styled-components-&-typescript/
