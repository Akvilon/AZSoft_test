import { createUseStyles } from "react-jss";
import { Theme, getMainShadowStyle } from "../../styles";


export default createUseStyles((theme: Theme) => ({
    snksInputLabel: {
        fontWeight: 'bold',
    },
    snksInput: {
        height: '40px',
        width: '100%',
        borderRadius: '4px',
        border: 'none',
        paddingLeft: '15px',
        boxShadow: getMainShadowStyle(theme)
    }
}))