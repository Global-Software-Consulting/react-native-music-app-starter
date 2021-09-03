import { put, call } from "redux-saga/effects";
import { Alert } from "react-native";
import musicList from "../../services/musicList";
import * as appActions from "../actions/appActions";
import {tracks} from "../../components/data/tracks";


// Our worker Saga that logins the user
export default function* musicListAsync() {
  //start loading
// yield put(appActions.IFetchBooksLoading());
  //calling api
  let response = yield call(musicList);
  if (response && response.status == '200') {
    yield put(appActions.musicListResponse(tracks))
    //ends loading
    // yield put(appActions.IFetchBooksLoadingStop());
  } 
  else
  {
    // yield put(appActions.IFetchBooksLoadingStop());
    // Alert.alert('Book App', 'Error fetching book list');
  }
}
