import { put, call } from "redux-saga/effects";
import player from "../../services/player";
import * as playerActions from "../actions/playerActions";



// Our worker Saga that logins the user
export default function* playerSagaAsync() {
  //start loading
  // yield put(appActions.IFetchBooksLoading());
  //calling api
  let response = yield call(playerList);
  if (response && response.status == '200') {
    let data = response.data.data;
    yield put(playerActions.playerListResponse(data))
    //ends loading
    // yield put(appActions.IFetchBooksLoadingStop());
  }
  else {
    // yield put(appActions.IFetchBooksLoadingStop());
    // Alert.alert('Book App', 'Error fetching book list');
  }
}
