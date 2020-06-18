import { compose, combineReducers, createStore, applyMiddleware, Middleware } from "redux";
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {History} from 'history';
import cache, { CacheState, cacheMiddlewares } from "./cache";

// @ts-ignore
const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    // @ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export interface AppState {
    cache: CacheState
}

const rootReducer = (history: History) => combineReducers(
    {
        cache,
        router: connectRouter(history)
    }
);

export default (history: History) => {
    return createStore(
        rootReducer(history),
			undefined,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                ...cacheMiddlewares as Middleware[]
            )
        )
    );
}