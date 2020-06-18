

export type ThemeColors = {
    background: string,
    contrastBackground: string,
    btnBackground: string,
    btnHoverBackground: string,
    btnDisabledBackground: string;
    btnDisabledHoverBackground: string;
    border: string,
    contrastBorder: string,
    btnBorder: string,
    btnHoverBorder: string,
    btnDisabledBorder: string,
    btnDisabledHoverBorder: string,
    mainGradient: string,
    blackoutBackground: string,
    mainShadow: string,
    insetShadow: string,
    text: string,
    textHover: string,
    contrastText: string,
    textDisabled: string,
}


export type Theme = {
    colors: ThemeColors;
    typo: {
        fontFamily: string;
        fontSize: string;
    }
}