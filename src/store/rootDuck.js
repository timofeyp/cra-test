import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import * as session from 'store/ducks/session.duck';
import * as schedule from 'store/ducks/schedule.duck';
import * as event from 'store/ducks/event.duck';
import * as vcparts from 'store/ducks/v-c-parts.duck';
import * as settings from 'store/ducks/settings.duck';
import * as creating from 'store/ducks/creating.duck';
import * as alert from 'store/ducks/alert.duck';
import * as ldap from 'store/ducks/ldap.duck';
import history from 'utils/history';

export const rootReducer = combineReducers({
  session: session.reducer,
  schedule: schedule.reducer,
  event: event.reducer,
  vcparts: vcparts.reducer,
  settings: settings.reducer,
  creating: creating.reducer,
  alert: alert.reducer,
  ldap: ldap.reducer,
  router: connectRouter(history),
});

export function* rootSaga() {
  yield all([
    session.saga(),
    schedule.saga(),
    event.saga(),
    vcparts.saga(),
    settings.saga(),
    creating.saga(),
    alert.saga(),
    ldap.saga(),
  ]);
}
