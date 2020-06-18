import { createUseStyles } from "react-jss";
import { Theme } from "../../styles";



export default createUseStyles((theme: Theme) => ({
    Form: {
        '& input': {
            marginBottom: '15px'
        }
    }
}))