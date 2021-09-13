import { put, call } from "redux-saga/effects";
import musicList from "../../services/musicList";
import * as appActions from "../actions/appActions";



// Our worker Saga that logins the user
export default function* musicListAsync() {
  //start loading
  yield put(appActions.enableLoader());
  //calling api
  let response = yield call(musicList);
  if (response && response.status == '200') {
    let data = response.data.data;
    yield put(appActions.musicListResponse(data))
    //ends loading
    yield put(appActions.disableLoader());
  }
  else {
    yield put(appActions.disableLoader());
    // Alert.alert('Book App', 'Error fetching book list');
  }
}
