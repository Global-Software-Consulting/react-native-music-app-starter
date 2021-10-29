/**
 * @format
 */
import 'react-native';
import React from 'react';
import PlaylistAndAlbums from '../../../../app/screens/PlaylistAndAlbums/PlaylistAndAlbumsConatiner';
// Note: test renderer must be required after react-native.
import { render, fireEvent } from '@testing-library/react-native';

jest.setTimeout(15000);

jest.mock("react-native-responsive-screen", () => {
    return {
        heightPercentageToDP: jest.fn()
    }


});
jest.mock('@react-navigation/native', () => {
    return {
        useIsFocused: jest.fn(),
        useNavigation: jest.fn()
    }


});
jest.mock("react-native-responsive-screen", () => {
    return {
        heightPercentageToDP: jest.fn(),
        widthPercentageToDP: jest.fn(),

    }
});

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));
describe("group tesing goes here", () => {
    test('delete song', () => {
        // const playlistReference = { playlistRef: { current: { snapToIndex: 0 } } };
        const { getByTestId } = render(<PlaylistAndAlbums />);
        fireEvent.press(getByTestId('deleteSongs'));
    });
    // test('favorite press', () => {
    //     // const playlistReference = { playlistRef: { current: { snapToIndex: 0 } } };
    //     const { getByTestId } = render(<PlaylistAndAlbums />);
    //     fireEvent.press(getByTestId('favPress'));
    // });
    // test('adding to playlist', () => {
    //     // const playlistReference = { playlistRef: { current: { snapToIndex: 0 } } };
    //     const { getByTestId } = render(<PlaylistAndAlbums />);

    // });

});