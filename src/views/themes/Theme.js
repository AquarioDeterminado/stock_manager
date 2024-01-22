import {createGlobalStyle} from "styled-components";
import PurpleTheme from "./PurpleTheme";

class Theme {

    constructor(theme) {
        this.theme = theme;
        this.cssVars = this.createCssVar(theme);
    }

    createCssVar(items, prefix = '-') {
        return Object.entries(items).flatMap(([key, value]) => {
            const varName = `${prefix}-${key}`;
            if (typeof value === 'object')
                return this.createCssVar(value, varName);
            return `${varName}:${value}`;
        });
    }
}

const GlobalTheme = new PurpleTheme();
const GlobalStyle = createGlobalStyle`
  html{
    ${GlobalTheme.cssVars}
  }
`
const defExp = {Theme: Theme, GlobalStyle: GlobalStyle};

export default defExp; //TODO: import not working