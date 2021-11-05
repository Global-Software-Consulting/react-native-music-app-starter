import { put, call } from 'redux-saga/effects';
import musicList from '../../services/musicList';
import * as loadingActions from '../actions/loadingActions';
import * as appActions from '../actions/appActions';
import { AxiosResponse } from 'axios';
import { ReducerState } from 'app/models/reducers';
import Toast from 'react-native-simple-toast';
// Our worker Saga that logins the user
export default function* musicListAsync() {
    try {
        //start loading
        yield put(loadingActions.enableLoader());
        //calling api
        const response: AxiosResponse<{ data: ReducerState }> = yield call(musicList);
        if (response && response.status == 200) {
            const data = response.data.data;
            yield put(appActions.musicListResponse(data));
            //ends loading
            yield put(loadingActions.disableLoader());
        } else {
            yield put(loadingActions.disableLoader());
            // Toast.show("network failed");

        }
    }
    catch {
        yield put(loadingActions.disableLoader());
    }
}
