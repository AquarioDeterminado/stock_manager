import Theme from './Theme';

class PurpleTheme extends Theme {

    constructor() {
        super(PurpleTheme.theme);
    }

    static purplePallete = {
        primary: {
            shadow: '#4c68c0',
            main: '#7292f3',
            light: '#99aef1',
            white: '#ffffff',
            black: '#000000'
        },
        accent: {
            yellow: '#f7b731'
        }
    }

    static theme = {
        palette: this.purplePallete,
        typography: {
            fontFamily: 'Roboto',
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500
        },
        primary: {
            text: this.purplePallete.primary.white,
            background: this.purplePallete.primary.main,
            hover: this.purplePallete.primary.light,
            click: this.purplePallete.primary.shadow
        }
    }
}

export default PurpleTheme;