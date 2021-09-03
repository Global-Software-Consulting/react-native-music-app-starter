import { put, call } from "redux-saga/effects";
import { Alert } from "react-native";
import favoriteList from "../../services/favoriteList";
import * as appActions from "../actions/appActions";
import {tracks} from "../../components/data/tracks";


// Our worker Saga that logins the user
export default function* ffavoriteListAsync() {
  //start loading
// yield put(appActions.IFetchBooksLoading());
  //calling api
  let response = yield call(favoriteList);
 console.log("response",response)
  if (response && response.status == '200') {
    yield put(appActions.favoriteListResponse(tracks))
    //ends loading
    // yield put(appActions.IFetchBooksLoadingStop());
  } 
  else
  {
    // yield put(appActions.IFetchBooksLoadingStop());
    // Alert.alert('Book App', 'Error fetching book list');
  }
}
