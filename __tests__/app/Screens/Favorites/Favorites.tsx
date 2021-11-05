/**
 * @format
 */
import 'react-native';
import React from 'react';
import Favorites from '../../../../app/screens/Favorites';
// Note: test renderer must be required after react-native.
import { render } from '@testing-library/react-native';

jest.mock("react-native-responsive-screen", () => {
    return {
        heightPercentageToDP: jest.fn(),
        widthPercentageToDP: jest.fn(),

    }


});
jest.mock('@react-navigation/native', () => {
    return {
        useIsFocused: jest.fn(),
        useNavigation: jest.fn()
    }


});
jest.mock('react-i18next', () => {
    return {
        useTranslation: () => {
            return {
                t: jest.fn(),
            };
        },
    };
});

jest.mock('react-native-iphone-x-helper', () => ({
    getStatusBarHeight: jest.fn(),
    getBottomSpace: jest.fn(),
}));
jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));
describe("group tesing goes here", () => {
    test('renders correctly', () => {
        const tree = render(<Favorites />);
        expect(tree).toMatchSnapshot();
    });
})

