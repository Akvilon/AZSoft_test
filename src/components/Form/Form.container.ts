import { Form } from "./Form";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Action } from "../../store/types";
import { CacheItem } from "../../Models/CacheItem";
import { addCacheItem, getSelectedItemSelector } from "../../store/cache";
import { AppState } from "../../store";


type StateProps = {
    selectedItem: CacheItem
}

type DispatchProps = {
    addCacheItem: (item: CacheItem) => void
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        selectedItem: getSelectedItemSelector(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
    return {
        addCacheItem: (item:CacheItem) => dispatch(addCacheItem(item))
    }
}

const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(Form)

export {ConnectedForm as Form}