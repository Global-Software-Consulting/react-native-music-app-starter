import { put, call } from "redux-saga/effects";
import { Alert } from "react-native";
import musicList from "../../services/musicList";
import * as appActions from "../actions/appActions";
import { tracks } from "../../data/tracks";
import { log } from "react-native-reanimated";


// Our worker Saga that logins the user
export default function* musicListAsync() {
  //start loading
  // yield put(appActions.IFetchBooksLoading());
  //calling api
  let response = yield call(musicList);
  console.log("saga responseeee:", response);

  if (response && response.status == '200') {
    let data = response.data.data;
    console.log("datadatadatadatadatadatadata", data);

    yield put(appActions.musicListResponse(data))
    //ends loading
    // yield put(appActions.IFetchBooksLoadingStop());
  }
  else {
    // yield put(appActions.IFetchBooksLoadingStop());
    // Alert.alert('Book App', 'Error fetching book list');
  }
}
