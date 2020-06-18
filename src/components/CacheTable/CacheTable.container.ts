import { connect } from "react-redux";
import { CacheItem } from "../../Models/CacheItem";
import { getCatchListSelector, setSelectedItem } from "../../store/cache";
import { CacheTable } from "./CacheTable";
import { AppState } from "../../store";
import { Dispatch } from "redux";
import { Action } from "../../store/types";


type StateProps = {
    cacheList: Array<CacheItem>,
}

type DispatchProps = {
    setSelectedItem: (item: CacheItem) => void
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        cacheList: getCatchListSelector(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
    return {
        setSelectedItem: (item:CacheItem) => dispatch(setSelectedItem(item))
    }
}

const ConnectedCacheTable = connect(mapStateToProps, mapDispatchToProps)(CacheTable)

export {ConnectedCacheTable as CacheTable}