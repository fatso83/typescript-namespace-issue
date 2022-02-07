import {themeA, themeB} from "./theme";

const combined = {
    ...themeA,
    ...themeB,
}

declare module 'styled-components' {
    type Theme = typeof combined

    /* eslint-disable @typescript-eslint/no-empty-interface */
    export interface DefaultTheme extends Theme {}
}