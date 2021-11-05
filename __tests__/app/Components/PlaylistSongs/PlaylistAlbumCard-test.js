/**
 * @format
 */
import 'react-native';
import React from 'react';
import PlaylistsAlbumsCard from '../../../../app/components/Playlist/PlaylistSongs/PlaylistsAlbumsCard';
// Note: test renderer must be required after react-native.
import { fireEvent, render } from '@testing-library/react-native';

jest.mock('react-native-responsive-screen', () => {
    return {
        heightPercentageToDP: jest.fn(),
        widthPercentageToDP: jest.fn(),
    };
});

jest.mock('@react-navigation/native', () => {
    return {
        useIsFocused: jest.fn(),
        useNavigation: jest.fn(),
        useRoute: jest.fn(),
    };
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
    // test('task card', () => {
    //     const { getByTestId } = render(
    //         <PlaylistsAlbumsCard
    //             name
    //             model
    //             setThePlaylist={(data) => {}}
    //             item
    //             playlistRef
    //             onPress
    //         />,
    //     );
    //     fireEvent.press(getByTestId('settingPlaylist'));
    // });

    test('setting playlist', () => {
        const { getByTestId } = render(
            <PlaylistsAlbumsCard
                name
                model
                setThePlaylist={(data) => {}}
                item
                playlistRef
                onPress
            />,
        );
        fireEvent.press(getByTestId('settingPlaylist'));
    });
});
