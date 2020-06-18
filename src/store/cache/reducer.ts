import { Action } from "../types";
import { ACTION_TYPES } from "./actionTypes";
import { CacheItem } from "../../Models/CacheItem";


const INITIAL_STATE = {
    cacheList: [] as Array<CacheItem>,
    selectedItem: { key: '', value: '' } as CacheItem,
    lastActiveItem: {} as CacheItem
}

export type CacheState = typeof INITIAL_STATE;

export default (state: CacheState = INITIAL_STATE, action: Action<any>) => {
    switch (action.type) {
        case ACTION_TYPES.SET_CACHE_ITEM:
            return {
                ...state,
                cacheList: [...state.cacheList, action.payload]
            };
        case ACTION_TYPES.UPDATE_CACHE_ITEM:
           return {
               ...state,
               cacheList: state.cacheList.map((item: CacheItem) => {
                   if(item.key === action.payload.key) {
                    return {...item, value: action.payload.value}
                   }
                   return item
               })
           }
        case ACTION_TYPES.SET_SELECTED_ITEM:
            return Object.assign({}, state, { selectedItem: action.payload })
        case ACTION_TYPES.DELETE_CACHE_ITEM:
            return {
                ...state,
                cacheList: state.cacheList.filter((item: CacheItem) => item.key !== action.payload.key)
            }
        default:
            return state
    }
}