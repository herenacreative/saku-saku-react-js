import {
    applyMiddleware,
    createStore,
    persistReducer,
    persistStore,
    logger,
    promiseMiddleware,
    storage
} from 'libraries';
import rootReducer from './reducers'

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"]
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = createStore(
    persistedReducer,
    applyMiddleware(promiseMiddleware, logger)
)

let persistor = persistStore(store)

export default {store, persistor}