/**
 * @format
 */
import 'react-native';
import React from 'react';
import MusicCardShimmer from '../../../../app/components/Music/MusicCardShimmer';
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
        useNavigation: jest.fn(),
        // useRoute: jest.fn(),
        useRoute: () => {
            return {
                route: {
                    params: {
                        item: {
                            id: '5',
                            url: 'https://www.chosic.com/wp-content/uploads/2021/05/inossi-got-you.mp3',
                            title: 'Got You',
                            artist: 'Noor',
                            artwork: 'https://picsum.photos/id/103/200/300',
                            album: 'INOSSI',
                        }

                    }
                },
            }

        }

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
        const tree = render(<MusicCardShimmer />);
        expect(tree).toMatchSnapshot();
    });
})

