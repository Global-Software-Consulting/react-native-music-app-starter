// export action creators
import * as loginActions from './loginActions';
import * as appActions from './appActions';
import * as playerActions from './playerActions';
import * as navigationActions from './navigationActions';
import * as themeActions from './themeActions';

export const ActionCreators = Object.assign(
  {},
  playerActions,
  loginActions,
  navigationActions,
  themeActions,
  appActions
);
