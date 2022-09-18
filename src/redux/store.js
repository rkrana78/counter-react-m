import counterReducer from "./counter/counterReducer";
import { createStore } from 'redux';

const store = createStore(counterReducer);

export default store;