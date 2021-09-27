/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as themeReducer from './themeReducer';
import * as appReducer from './appReducer';
import * as playerReducer from './playerReducer';

export default Object.assign(loadingReducer, themeReducer, appReducer, playerReducer);
