import { createUseStyles } from "react-jss";
import { Theme } from "../../styles";



export default createUseStyles((theme: Theme) => ({
    CacheTableTop: {
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid #333',
        padding: '15px'
    },
    CacheTableTopBlock: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    CacheTableList: {

    },
    CacheTableItem: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '15px',
        borderLeft: '1px solid #333',
        borderRight: '1px solid #333',
        borderBottom: '1px solid #333',
        cursor: 'pointer'
    },
    CacheTableItemBlock: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))