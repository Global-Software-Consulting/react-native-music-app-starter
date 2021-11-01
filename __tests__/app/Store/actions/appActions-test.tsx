import * as actions from '../../../../app/store/actions/appActions';

export const MUSIC_LIST_RESPONSE = 'MUSIC_LIST_RESPONSE';

describe('App Actions', () => {
    it('Creation of actions with music list request type', () => {
        const expectedAction = {
            type: 'MUSIC_LIST_REQUEST',
        };
        expect(actions.musicListRequest()).toEqual(expectedAction);
    });

    it('Creation of actions with music list respone type', () => {
        const expectedAction = {
            type: 'MUSIC_LIST_RESPONSE',
        };
        expect(actions.musicListResponse()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'FAVORITE_LIST_REQUEST',
        };
    });
});
