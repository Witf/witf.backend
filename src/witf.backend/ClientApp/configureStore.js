/// <reference path="../node_modules/@types/webpack-env/index.d.ts" />
/// <reference path="../node_modules/@types/react-redux/index.d.ts" />
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as Store from './store/store';
import { typedToPlain } from 'redux-typed';
export default function configureStore(initialState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    const windowIfDefined = typeof window === 'undefined' ? null : window;
    // If devTools is installed, connect to it
    const devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension;
    const createStoreWithMiddleware = compose(applyMiddleware(thunk, typedToPlain), devToolsExtension ? devToolsExtension() : f => f)(createStore);
    // Combine all reducers and instantiate the app-wide store instance
    const allReducers = buildRootReducer(Store.reducers);
    const store = createStoreWithMiddleware(allReducers, initialState);
    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('./store/store', () => {
            const nextRootReducer = require('./store/store');
            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
        });
    }
    return store;
}
function buildRootReducer(allReducers) {
    return combineReducers(Object.assign({}, allReducers));
}
//# sourceMappingURL=configureStore.js.map