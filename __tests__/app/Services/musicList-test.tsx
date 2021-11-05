
import { apiClient } from 'services/client';
import ApiConfig from 'config/api-config';
import musicList from '../../../app/services/musicList';
import * as reactRedux from 'react-redux';
import { ReducerState } from '../../../app/models/reducers/index';
import { appReducer } from 'app/store/reducers/appReducer';
import { render } from '@testing-library/react-native';

describe("group tesing goes here", () => {
    // test('renders correctly', () => {
    //     const musicListMock = jest
    //         .spyOn(apiClient, 'apiClient')
    //         .mockImplementation((cb) => cb(ApiConfig.MUSIC_LIST));
    //     musicListMock.mockClear();

    //     const tree = render(<musicList />);
    //     expect(tree).toMatchSnapshot();
    // });
    test('services test', () => {
        expect('abc').toEqual('abc');
    })
});