import listReducer from "./listReducer";
import { createStore, combineReducers} from "redux";


const rootReducer = combineReducers({
    Data:listReducer
    
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;