import { themeReducer } from '../../../../app/store/reducers/themeReducer';

describe('theme reducer tests', () => {
    test('should return the initial state', () =>
        expect(themeReducer(undefined, {})).toEqual({
            isDark: false,
        }));
    test('should toggle app theme', () => {
        expect(
            themeReducer(
                {},
                {
                    type: 'TOGGLE_THEME',
                    isDark: true
                },
            ),
        );
    });


});