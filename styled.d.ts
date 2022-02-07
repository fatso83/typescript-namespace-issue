import {themeA, themeB} from "./theme";

const combined = {
    ...themeA,
    ...themeB,
}


declare module 'styled-components' {
    type CombinedTheme = typeof combined;
    type Theme = CombinedTheme

    /* eslint-disable @typescript-eslint/no-empty-interface */
    export interface DefaultTheme extends Theme {}
}