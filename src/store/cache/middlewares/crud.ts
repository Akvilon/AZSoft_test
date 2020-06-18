import { MiddlewareAPI, Middleware } from "redux";
import { Action } from "../../types";
import { ACTION_TYPES } from "../actionTypes";
import { setCacheItem, deleteCacheItem, updateCachedItem } from "..";
import { CacheItem } from "../../../Models/CacheItem";
import { setLocalStorage, getLocalStorage } from "../../../utils/storage";

const LAST_ACTIVE = 'LAST_ACTIVE';

export const crudMiddleware: Middleware = ({ getState, dispatch }: MiddlewareAPI) => (next: (action: Action<any>) => void) => async (action: Action<any>) => {

    if (action.type === ACTION_TYPES.ADD_CACHE_ITEM) {

        const state = getState()
        const list = state.cache.cacheList
        const isExist = list.some((item: CacheItem) => item.key === action.payload.key)

        if (list.length === 2 && isExist) {
           dispatch(updateCachedItem(action.payload))
           setLocalStorage(LAST_ACTIVE, JSON.stringify(action.payload))

        } else if (list.length === 2) {
            const lastActive = JSON.parse(String(getLocalStorage(LAST_ACTIVE)))
            const itemToDelete = list.find((item: CacheItem) => item.key !== lastActive.key)

            dispatch(deleteCacheItem(itemToDelete))
            dispatch(setCacheItem(action.payload))
        } else {
            dispatch(setCacheItem(action.payload))
            setLocalStorage(LAST_ACTIVE, JSON.stringify(action.payload))
        }

    } else if (action.type === ACTION_TYPES.SET_SELECTED_ITEM) {
        setLocalStorage(LAST_ACTIVE, JSON.stringify(action.payload))
    }

    next(action);
}