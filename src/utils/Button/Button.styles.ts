import { createUseStyles } from "react-jss";
import {
    Theme,
    baseFontSize,
    getTextStyle,
    getContrastTextStyle,
    getBackgroundStyle,
    getBtnBackgroundStyle,
    getBtnHoverBackgroundStyle,
    getBtnHoverBorderStyle,
    getTextHoverStyle,
    getBtnBorderStyle,
    getBtnDisabledBackgroundStyle,
    getBtnDisabledBorderStyle,
    getBtnDisabledHoverBackgroundStyle,
    getBtnDisabledHoverBorderStyle,
    getTextDisabledStyle
} from "../../styles";



export enum ButtonVariant {
    DEFAULT = 'defaultBtn',
    PRIMARY = 'primaryBtn',
    TEXT = 'textBtn'
}

export default createUseStyles((theme: Theme) => ({
    snksButton: {
        height: '42px',
        width: '100%',
        borderRadius: '4px',
        border: `1px solid ${getBtnBorderStyle(theme)}`,
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '1rem',
        transition: '.3s',
        padding: 0,
        '&:hover': {
            transition: '.3s',
        },
        '& h1,h2,h3,h4,h5,h6,p,span': {
            fontSize: baseFontSize
        }
    },
    defaultBtn: {
        border: `1px solid ${getBtnBorderStyle(theme)}`,
        background: getBackgroundStyle(theme),
        color: getTextStyle(theme),
        '&:hover': {
            border: `1px solid ${getBtnHoverBorderStyle(theme)}`,
            color: getTextHoverStyle(theme),
        }
    },
    defaultBtnDisabled: {
        border: `1px solid ${getBtnDisabledBorderStyle(theme)}`,
        background: getBackgroundStyle(theme),
        color: getTextDisabledStyle(theme),
        cursor: 'default',
        '&:hover': {
            border: `1px solid ${getBtnDisabledBorderStyle(theme)}`,
            background: getBackgroundStyle(theme),
            color: getTextDisabledStyle(theme),
        }
    },
    defaultBtnActive: {
        border: `1px solid ${getBtnHoverBorderStyle(theme)}`,
        color: getTextHoverStyle(theme),
        background: getBackgroundStyle(theme),
    },
    primaryBtn: {
        color: getContrastTextStyle(theme),
        background: getBtnBackgroundStyle(theme),
        '&:hover': {
            background: getBtnHoverBackgroundStyle(theme),
            border: getBtnHoverBorderStyle(theme)
        },
    },
    primaryBtnDisabled: {
        background: getBtnDisabledBackgroundStyle(theme),
        border: getBtnDisabledBorderStyle(theme),
        color: getTextDisabledStyle(theme),
        cursor: 'default',
        '&:hover': {
            background: getBtnDisabledHoverBackgroundStyle(theme),
            border: getBtnDisabledHoverBorderStyle(theme),
            color: getTextDisabledStyle(theme),
        }
    },
    primaryBtnActive: {
        background: getBtnHoverBackgroundStyle(theme),
        border: getBtnHoverBorderStyle(theme)
    },
    textBtn: {
        height: '100%',
        width: 'auto',
        border: 'none',
        borderRadius: '0px',
        background: 'none',
        '&:hover': {
            color: getTextHoverStyle(theme)
        }
    },
    textBtnDisabled: {
        color: getTextDisabledStyle(theme),
        cursor: 'default',
        '&:hover': {
            color: getTextDisabledStyle(theme),
        }
    },
    textBtnActive: {
        color: getTextHoverStyle(theme)
    },
}))