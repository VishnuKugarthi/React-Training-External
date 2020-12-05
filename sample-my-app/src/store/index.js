import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../reducers/bugsReducer';
import projectsReducer from '../reducers/projectsReducer';

//const store = createStore(bugsReducer);
//const store = createStore(projectsReducer);

const rootReducer = combineReducers({
    bugState : bugsReducer,
    projectState : projectsReducer
})

function loggerMiddleware(store){
    return function(next){
        return function(action){
            // console.log(action);
            console.log(action.type);
            return next(action);
        }
    }

}
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default store;
