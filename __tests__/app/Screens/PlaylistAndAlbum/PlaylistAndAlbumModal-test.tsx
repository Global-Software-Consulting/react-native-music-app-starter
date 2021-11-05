/**
 * @format
 */
import 'react-native';
import React from 'react';
import PlaylistAndAlbumsModal from '../../../../app/screens/PlaylistAndAlbums/PlaylistAndAlbumsModal';
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
describe("group tesing goes here", () => {
    test('delete song', () => {
        // const playlistReference = { playlistRef: { current: { snapToIndex: 0 } } };
        const { getByTestId } = render(<PlaylistAndAlbumsModal />);
        fireEvent.press(getByTestId('removingPlaylist'));
    });
    // test('favorite press', () => {
    //     // const playlistReference = { playlistRef: { current: { snapToIndex: 0 } } };
    //     const { getByTestId } = render(<PlaylistAndAlbumsModal />);
    //     fireEvent.press(getByTestId('favPress'));
    // });
    // test('adding to playlist', () => {
    //     // const playlistReference = { playlistRef: { current: { snapToIndex: 0 } } };
    //     const { getByTestId } = render(<PlaylistAndAlbumsModal />);
    //     fireEvent.press(getByTestId('addToPlaylist'));
    // });
    // test('setting songs', () => {
    //     const playlistReference = { current: { snapToIndex: 0 } };
    //     const { getByTestId } = render(<PlaylistAndAlbumsModal setSong={() => { }} playlistRef={playlistReference} />);
    //     fireEvent.press(getByTestId('settingSongs'));
    // });
    // test('card task', () => {
    //     const { getByTestId } = render(<PlaylistAndAlbumsModal />);
    //     fireEvent.press(getByTestId('cardTask'));
    // });
})

