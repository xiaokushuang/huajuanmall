import {createStore,combineReducers,applyMiddleware,compose} from "redux";
import listReducer from "./Reducers/listReducer";
import promiseMid from "redux-promise";
import categoryReducer from "./Reducers/categoryReducer";
import countReducer from "./Reducers/countReducer";
import numReducer from "./Reducers/numReducer";
const reducer = combineReducers({
	listReducer,
	categoryReducer,
	countReducer,
	numReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(promiseMid)
  ));

export default store;