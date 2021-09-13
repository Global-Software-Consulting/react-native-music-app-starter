import { put, call } from "redux-saga/effects";
import { Alert } from "react-native";
import * as loadingActions from "../actions/loadingActions";
import favoriteList from "../../services/favoriteList";
import * as appActions from "../actions/appActions";


// Our worker Saga that logins the user
export default function* favoriteListAsync(payload:any) {
  console.log("loggg:", payload.data);
  
  //start loading
  yield put(loadingActions.enableLoader());
  //calling api
  let response = yield call(favoriteList);
  if (response && response.status == '200') {
    yield put(appActions.favoriteListResponse(payload.data))
    //ends loading
    yield put(loadingActions.disableLoader());
    
  } 
  else
  {
    // yield put(appActions.IFetchBooksLoadingStop());
    // Alert.alert('Book App', 'Error fetching book list');
  }
}
