import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from 'reducers'

const persistStorage = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistStorage, reducer)

// Creating, configuring and returning store
const index = (initialState = {}) => {
    const store = createStore(
        persistedReducer,
        devToolsEnhancer({})
    )
    const persistor = persistStore(store)

    return {store, persistor}
}

export default index