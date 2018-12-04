import {createStore,combineReducers,applyMiddleware,compose} from "redux";
import listReducer from "./Reducers/listReducer";
import promiseMid from "redux-promise";

const reducer = combineReducers({
	listReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(promiseMid)
  ));

  export default store;