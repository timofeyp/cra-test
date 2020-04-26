import { call } from 'redux-saga/effects';

const getExports = axios => {
  function* fetchAuth(values) {
    return yield call(axios.post, '/api/auth/login', values);
  }

  function* fetchSession() {
    return yield call(axios.get, '/api/auth/session');
  }

  function* fetchLogout(values) {
    return yield call(axios.post, '/api/auth/logout', values);
  }

  return { fetchAuth, fetchSession, fetchLogout };
};

export default getExports;
