import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import musicList from '../../../../app/services/musicList';
import * as appActions from '../../../../app/store/actions/appActions';
import musicListAsync from '../../../../app/store/sagas/musicListSaga';
import * as loadingActions from '../../../../app/store/actions/loadingActions';
import { ReducerState } from 'app/models/reducers';

// const payload: ReducerState = {};
describe('musicListSaga', () => {
    test('Test success case', async () => {
        const gen = cloneableGenerator(musicListAsync)();
        expect(gen.next().value).toEqual(put(loadingActions.enableLoader()));
        // Is it calling the musicList api
        expect(gen.next().value).toEqual(call(musicList));
        // it wil chewck the if statements when status is 200

        let response = { status: 200 };
        // let mockData = { response: { data: { data: '200' } } }
        // expect(gen.next(respo nse).value).toEqual(put(appActions.musicListResponse()));
        expect(gen.next(response).value).toEqual(put(loadingActions.disableLoader()));
    });
    test('Internet Connection failed"', async () => {
        const gen = cloneableGenerator(musicListAsync)();
        gen.next();
        gen.next();
        let response = { status: '400' };

        expect(gen.next(response).value).toEqual(put(loadingActions.disableLoader()));
    });
    test('Catch error"', async () => {
        const gen = cloneableGenerator(musicListAsync)();
        let response = { status: '400' };
        gen.next();
        gen.next();
        expect(gen.next(response).value).toEqual(put(loadingActions.disableLoader()));
        expect(gen.throw({ exception: 'unexpected exception' }).value).toEqual(
            put(loadingActions.disableLoader()),
        );
    });



});