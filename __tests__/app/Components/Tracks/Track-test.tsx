/**
 * @format
 */
import 'react-native';
import React from 'react';
import PlaylistsTracksCard from '../../../../app/components/Playlist/Tracks/PlaylistsTracksCard';
// Note: test renderer must be required after react-native.
import { render, fireEvent } from '@testing-library/react-native';
import { CurrentRenderContext } from '@react-navigation/native';


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
        useRoute: jest.fn(),

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
    test('adding a songs', () => {
        // const playlistReference = { playlistRef: { current: { snapToIndex: 0 } } };
        const { getByTestId } = render(<PlaylistsTracksCard />);
        fireEvent.press(getByTestId('setASongs'));
    });
    test('setting songs', () => {
        const playlistReference = { current: { snapToIndex: 0 } };
        const { getByTestId } = render(<PlaylistsTracksCard setSong={() => { }} playlistRef={playlistReference} />);
        fireEvent.press(getByTestId('settingSongs'));
    });
    // test('card task', () => {
    //     const { getByTestId } = render(<PlaylistsTracksCard />);
    //     fireEvent.press(getByTestId('cardTask'));
    // });

})

