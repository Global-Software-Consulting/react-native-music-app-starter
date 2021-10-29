/**
 * @format
 */
import 'react-native';
import React from 'react';
import AppCreatePlaylistModal from '../../../../app/components/player/AppCreatePlaylistModal';
// Note: test renderer must be required after react-native.
import { render, fireEvent } from '@testing-library/react-native';


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

// jest.mock('react-native-modal', () => 'react-native-modal');
jest.mock('react-native-modal', () => {
    return {
        __esModule: true,
        A: true,
        namedExport: jest.fn(),
        default: 'mockedDefaultExport',
    };
});
describe("group tesing goes here", () => {
    test('change text', () => {
        const { getByTestId } = render(<AppCreatePlaylistModal />);
        // fireEvent.press(getByTestId('changeTest'));
        // fireEvent(getByPlaceholderText('changeTest'), 'onChangeText', 'ab');
        fireEvent.changeText(getByTestId('changeTest'));
    });
    test('closing modal', () => {
        const { getByTestId } = render(<AppCreatePlaylistModal />);
        fireEvent.press(getByTestId('modalClose'));
    });
    test('closing modal', () => {
        const { getByTestId } = render(<AppCreatePlaylistModal />);
        fireEvent.press(getByTestId('savingNewPlayList'));
    });
})

