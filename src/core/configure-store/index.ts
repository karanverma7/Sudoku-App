import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducer from 'reducers'

// Creating, configuring and returning store
const index = (initialState = {}) => {
    const store = createStore(
        reducer,
        initialState,
        devToolsEnhancer({})
    )

    return store
}

export default index