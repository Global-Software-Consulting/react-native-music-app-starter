import { put, call } from "redux-saga/effects";
import { Alert } from "react-native";
import favoriteList from "../../services/favoriteList";
import * as appActions from "../actions/appActions";


// Our worker Saga that logins the user
export default function* favoriteListAsync(data) {
  console.log("loggg:", data.data);
  
  //start loading
// yield put(appActions.IFetchBooksLoading());
  //calling api
  let response = yield call(favoriteList);
  if (response && response.status == '200') {
    yield put(appActions.favoriteListResponse(data.data))
    //ends loading
    // yield put(appActions.IFetchBooksLoadingStop());
    
  } 
  else
  {
    // yield put(appActions.IFetchBooksLoadingStop());
    // Alert.alert('Book App', 'Error fetching book list');
  }
}
