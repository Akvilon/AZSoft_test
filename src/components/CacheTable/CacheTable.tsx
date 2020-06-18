import * as React from 'react';
import { CacheItem } from '../../Models/CacheItem';
import { useTheme } from 'react-jss';
import useStyles from './CacheTable.styles';
import { v4 as uuidv4 } from 'uuid';

type CacheProps = {
    cacheList: Array<CacheItem>,
    setSelectedItem: (item: CacheItem) => void
}

const CacheTable: React.FC<CacheProps> = ({ cacheList, setSelectedItem }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    const onCacheItemClick = (item: CacheItem) => {
        setSelectedItem(item)
    }

    const renderCacheList = (cacheList: Array<CacheItem>) => {
        return (
            <>
                {
                    cacheList.map(item => {
                        return (
                            <div
                                key={uuidv4()}
                                className={classes.CacheTableItem}
                                onClick={() => onCacheItemClick(item)}
                            >
                                <div className={classes.CacheTableItemBlock}>{item.key}</div>
                                <div className={classes.CacheTableItemBlock}>{item.value}</div>
                            </div>
                        )
                    })
                }
            </>
        )
    }
    return (
        <>
            <div className={classes.CacheTableTop}>
                <div className={classes.CacheTableTopBlock}>
                    <h3>Key</h3>
                </div>
                <div className={classes.CacheTableTopBlock}>
                    <h3>Value</h3>
                </div>
            </div>
            <div className={classes.CacheTableList}>
                {
                    cacheList && cacheList.length > 0 ? renderCacheList(cacheList) : null
                }
            </div>
        </>
    )
}

export { CacheTable }