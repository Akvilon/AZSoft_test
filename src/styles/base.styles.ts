import { Theme } from "./theme.types";
import { getTextStyle } from ".";

export default (theme: Theme) => ({
    '@global': {
        '*': {
            boxSizing: 'border-box',
            '&:active, &:hover, &:focus': {
                outline:0,
                '-webkit-tap-highlight-color': 'transparent',
            }
        },
        html: {
            minHeight: '100vh',
            // width: '100vw',
            fontFamily: theme.typo.fontFamily,
            fontSize: theme.typo.fontSize,
            fontWeight: 400,
            color: getTextStyle(theme),
            '-ms-text-size-adjust': '100%',
            '-webkit-text-size-adjust': '100%',
            '-webkit-font-smoothing': 'antialiased'
        },
        'body, p, h1, h2, h3, h4, h5, h6, ul, ol, figure': {
            margin:0,
            padding:0,
        },
        'ul, ol': {
            listStyle: 'none',
        },
        a: {
            textDecoration: 'none',
        },
        body: {
            height: '100vh',
            // width: '100vw',
            minHeight: '100vh'
        },
    },
})