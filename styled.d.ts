import {themeA, themeB} from "./theme";

const combined = {
    ...themeA,
    ...themeB,
}
type CombinedTheme = typeof combined;


declare module 'styled-components' {
    // why does not this work:
    //type EitherTheme = typeof themeA | typeof themeB
    //type Theme = EitherTheme  

    type Theme = Omit<CombinedTheme, 'foo' | 'bar' >

    /* eslint-disable @typescript-eslint/no-empty-interface */
    export interface DefaultTheme extends Theme {}
}
