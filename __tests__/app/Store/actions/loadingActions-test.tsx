import * as actions from '../../../../app/store/actions/loadingActions';
import * as type from "../../../../app/store/actions";

describe('Loading Actions', () => {

    test('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'MUSIC_ENABLE_LOADER',
        };
        expect(actions.enableLoader()).toEqual(expectedAction);
    });

    test('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'MUSIC_DISABLE_LOADER',
        };
        expect(actions.disableLoader()).toEqual(expectedAction);
    });
});
