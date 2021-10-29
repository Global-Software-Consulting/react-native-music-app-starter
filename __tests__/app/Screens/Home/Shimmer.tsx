/**
 * @format
 */
import 'react-native';
import React from 'react';
import Shimmer from '../../../../app/screens/Home/Shimmer';
import * as reactRedux from 'react-redux';
// Note: test renderer must be required after react-native.
import { render } from '@testing-library/react-native';
import { ReducerState } from '../../../../app/models/reducers/index'
import musicList from 'app/services/musicList';
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
    useSelector: jest.fn()

}));
describe("group tesing goes here", () => {
    test('renders correctly', () => {
        // const musicListState: ReducerState = {
        //     appReducer: musicList,
        // };
        // const musicListMock = jest
        //     .spyOn(reactRedux, 'useSelector')
        //     .mockImplementation((cb) => cb(musicListState));
        // musicListMock.mockClear();

        const tree = render(<Shimmer />);
        expect(tree).toMatchSnapshot();
    });
})

