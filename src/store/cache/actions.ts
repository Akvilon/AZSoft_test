import { ACTION_TYPES } from "./actionTypes";
import { CacheItem } from "../../Models/CacheItem";


export const getCacheList = () => ({
	type: ACTION_TYPES.GET_CACHE_LIST
})

export const addCacheItem = (item: CacheItem) => ({
	type: ACTION_TYPES.ADD_CACHE_ITEM,
	payload: item
})

export const setCacheItem = (item: CacheItem) => ({
	type: ACTION_TYPES.SET_CACHE_ITEM,
	payload: item
})

export const setSelectedItem = (item: CacheItem) => ({
	type: ACTION_TYPES.SET_SELECTED_ITEM,
	payload: item
})

export const updateCachedItem = (item: CacheItem) => ({
	type: ACTION_TYPES.UPDATE_CACHE_ITEM,
	payload: item
})

export const deleteCacheItem = (item: CacheItem) => ({
	type: ACTION_TYPES.DELETE_CACHE_ITEM,
	payload: item
})


