
import { baseFontFamily, baseFontSize } from "../variables.styles";
import { Theme } from "../theme.types";
import { mainThemeColors } from "../colors.styles";


export const mainTheme: Theme = {
    colors: mainThemeColors,
    typo: {
        fontFamily: baseFontFamily.join(', '),
        fontSize: baseFontSize,
    }
}

