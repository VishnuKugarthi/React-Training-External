import { createStore } from 'redux';
import bugsReducer from '../reducer/bugsReducer';

const store = createStore(bugsReducer);

export default store;