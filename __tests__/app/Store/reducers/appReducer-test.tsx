import { appReducer } from '../../../../app/store/reducers/appReducer';
// import * as appData from '../../TestData/Reducer/appData';

describe('app reducer tests', () => {
    test('should return the initial state', () =>
        expect(appReducer(undefined, {})).toEqual({
            musicList: [],
            favoriteList: [],
        }));
    test('should handle music list reposne action', () => {
        expect(
            appReducer(
                {},
                {
                    type: 'MUSIC_LIST_RESPONSE',
                    payload: "list",
                },
            ),
        ).toEqual({});
    });

    test('should handle "FAVORITE_LIST_REQUEST" action', () => {
        expect(
            appReducer(
                {},
                {
                    type: 'FAVORITE_LIST_REQUEST',
                    payload: ["favList"],
                },
            ),
        ).toEqual({});
    });

});