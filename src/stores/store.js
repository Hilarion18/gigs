import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import foodReducer from '../reducers/foodReducer';


const rootReducer = combineReducers({ 
  foodReducer: foodReducer
});

const configureStore = () => createStore(rootReducer);

export const Store = createStore(rootReducer, applyMiddleware(thunk));
export default configureStore;