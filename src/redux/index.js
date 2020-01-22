import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import userReducer from './modules/user';
import authenticationReducer from './modules/authentication';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  user: userReducer,
});

const configureStore = initialState => createStoreWithMiddleware(rootReducer, initialState);
export default configureStore;
