import React, { useEffect } from 'react';
import { View } from 'react-native';
import useStyles from './styles';
import HomeShimmer from './Shimmer';
import HomeComponent from './Container';
import { useDispatch, useSelector } from 'react-redux';
import { musicListRequest } from '../../store/actions/appActions';
import { ReducerState } from '../../models/reducers';
import { Music } from './types';

const Home: React.FC<Music> = (): JSX.Element => {
    const isLoader = useSelector((state: ReducerState) => state.loadingReducer?.isLoginLoading);

    const dispatch = useDispatch();
    const styles = useStyles();
    useEffect(() => {
        onRefresh();
    }, []);

    const getMusicList = async () => {
        dispatch(musicListRequest());
    };
    const onRefresh = () => {
        getMusicList();
        if (isLoader) {
            <HomeShimmer />;
        } else {
        }
    };
    return (
        <>
            <View style={styles.container}>{isLoader ? <HomeShimmer /> : <HomeComponent />}</View>
        </>
    );
};

export default Home;
