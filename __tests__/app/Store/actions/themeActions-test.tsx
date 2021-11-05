import * as actions from '../../../../app/store/actions/themeActions';
import * as type from "../../../../app/store/actions";

describe('theme Actions', () => {

    test('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'TOGGLE_THEME',
        };
        expect(actions.setIsDarkTheme()).toEqual(expectedAction);
    });

});
