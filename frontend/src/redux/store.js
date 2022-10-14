import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers/rootReducer";
import { PERSIST } from 'redux-persist/es/constants';
const persistConfig = {
  key: "cartReducer",
  storage: storage,
  whitelist: ['cartReducer']
};
const middlewares = [
    // disable PERSIST action.
    createStateSyncMiddleware({
        blacklist: [PERSIST],
    }),
];
 
const pReducer = persistReducer(persistConfig, rootReducer);
 
const store = createStore(pReducer,{}, applyMiddleware(...middlewares));
const persistor = persistStore(store);
initMessageListener(store);
export { persistor, store };

