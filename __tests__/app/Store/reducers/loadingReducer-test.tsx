import { loadingReducer } from '../../../../app/store/reducers/loadingReducer';
// import * as appData from '../../TestData/Reducer/appData';

describe('loading reducer tests', () => {
    test('should return the initial state', () =>
        expect(loadingReducer(undefined, {})).toEqual({
            isLoginLoading: false,
        }));
    test('should handle music list enable loader', () => {
        expect(
            loadingReducer(
                {},
                {
                    type: 'MUSIC_ENABLE_LOADER',
                    isLoginLoading: true
                },
            ),
        );
    });
    test('should handle music list diable loader', () => {
        expect(
            loadingReducer(
                {},
                {
                    type: 'MUSIC_DISABLE_LOADER',
                    isLoginLoading: false,
                },
            ),
        );
    });

});