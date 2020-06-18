import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles, { ButtonVariant } from './Button.styles';

type ButtonProps = {
    type?: any,
    variant: string,
    disabled?: boolean,
    active?: boolean,
    onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void
}

const Button: React.FC<ButtonProps> = ({ variant, type, onClick, disabled, active, children }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    let btnClass;

    if (variant === ButtonVariant.PRIMARY) {
        if (disabled) {
            btnClass = `${classes.snksButton} ${classes.primaryBtn} ${classes.primaryBtnDisabled}`
        } else if (active) {
            btnClass = `${classes.snksButton} ${classes.primaryBtn} ${classes.primaryBtnActive}`
        } else {
            btnClass = `${classes.snksButton} ${classes.primaryBtn}`
        }
    } else if (variant === ButtonVariant.TEXT) {
        if (disabled) {
            btnClass = `${classes.snksButton} ${classes.textBtn} ${classes.textBtnDisabled}`
        } else if (active) {
            btnClass = `${classes.snksButton} ${classes.primaryBtn} ${classes.textBtnActive}`
        } else {
            btnClass = `${classes.snksButton} ${classes.textBtn}`
        }
    } else {
        if (disabled) {
            btnClass = `${classes.snksButton} ${classes.defaultBtn} ${classes.defaultBtnDisabled}`
        } else if (active) {
            btnClass = `${classes.snksButton} ${classes.defaultBtn} ${classes.defaultBtnActive}`
        } else {
            btnClass = `${classes.snksButton} ${classes.defaultBtn}`
        }
    }

    return (
        <>
            <button className={btnClass} type={type} disabled={disabled} onClick={onClick}>
                {children}
            </button>
        </>
    )
}

export { Button };