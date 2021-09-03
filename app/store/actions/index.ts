// export action creators
import * as loginActions from './loginActions';
import * as appActions from './appActions';

import * as navigationActions from './navigationActions';
import * as themeActions from './themeActions';

export const ActionCreators = Object.assign(
  {},
  loginActions,
  navigationActions,
  themeActions,
  appActions
);
