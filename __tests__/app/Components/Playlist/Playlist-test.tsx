/**
 * @format
 */
import 'react-native';
import React from 'react';
import PlaylistCard from '../../../../app/components/Playlist/PlaylistCard';
// Note: test renderer must be required after react-native.
import { render } from '@testing-library/react-native';


jest.mock("react-native-responsive-screen", () => {
    return {
        heightPercentageToDP: jest.fn(),
        widthPercentageToDP: jest.fn(),

    }
});
jest.mock('react-native-gesture-handler', () => { jest.fn() });


jest.mock('@react-navigation/native', () => {
    return {
        useIsFocused: jest.fn(),
        useNavigation: jest.fn(),
        useRoute: jest.fn()
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
        const tree = render(<PlaylistCard />);
        expect(tree).toMatchSnapshot();
    });
})

