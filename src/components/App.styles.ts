import { createUseStyles } from "react-jss";
import { Theme, base } from "../styles";


export default createUseStyles((theme: Theme) => ({
    ...base(theme),
    App: {
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '30px'
    },
    AppForm: {
        width: '40%'
    },
    AppTable: {
        width: '40%'
    }
}))