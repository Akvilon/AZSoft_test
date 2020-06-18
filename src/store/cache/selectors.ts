import { AppState } from "..";

export const getCatchListSelector = (state: AppState) => state.cache.cacheList;
export const getSelectedItemSelector = (state: AppState) => state.cache.selectedItem;
