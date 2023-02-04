import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore, persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
}

export const store = configureStore({
	reducer: {
		auth: persistReducer(authPersistConfig, authReducer),
	},
});

export const persistor = persistStore(store);