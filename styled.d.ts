import {themeA, themeB} from "./theme";

const combined = {
    ...themeA,
    ...themeB,
}
type CombinedTheme = typeof combined;


declare module 'styled-components' {
    type Theme = Omit<CombinedTheme, 'foo' | 'bar' >

    /* eslint-disable @typescript-eslint/no-empty-interface */
    export interface DefaultTheme extends Theme {}
}