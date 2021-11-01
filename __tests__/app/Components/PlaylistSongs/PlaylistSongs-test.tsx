/**
 * @format
 */
import React from 'react';
import PlaylistSongsCard from '../../../../app/components/Playlist/PlaylistSongs/PlaylistSongsCard';
// Note: test renderer must be required after react-native.
import { fireEvent, render } from '@testing-library/react-native';


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
describe('Component testing', () => {
    test('adding songs', () => {
        const { getByTestId } = render(<PlaylistSongsCard />);
        fireEvent.press(getByTestId('addSongToPlaylist'));
    });

    //check by props method the attribute of text
    test('removing songs', () => {
        const { getByTestId } = render(<PlaylistSongsCard onPressRemove={() => { }} />);
        fireEvent.press(getByTestId('removeSongToPlaylist'));
    });
});