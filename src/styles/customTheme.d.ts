// import original module declarations
import "styled-components";

import { customTheme } from ".";

// and extend them!
declare module "styled-components" {
  type TCustomTheme = typeof customTheme;

  export interface DefaultTheme extends TCustomTheme {
    uselessProp?: string;
  }
}

// https://blog.agney.dev/styled-components-&-typescript/
