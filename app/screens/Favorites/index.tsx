import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import LeftArrowIcon from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerParamList } from '../../navigation/DrawerNavigator';
import FavoriteShimmer from './Shimmer';
import Favorite from './Conatiner';
import { AppState } from '../../models/reducers/app';
import { Loading } from '../../models/reducers/loading';

interface IState {
    appReducer: AppState;
    loadingReducer: Loading;
}
const Favorites: React.FC = () => {
    const isLoading = useSelector((state: IState) => state.loadingReducer.isLoginLoading);
    type HomeScreenProp = StackNavigationProp<DrawerParamList, 'Home'>;
    const navigation = useNavigation<HomeScreenProp>();
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <AppHeader
                renderLeft={
                    <TouchableOpacity
                        style={{ paddingHorizontal: 10 }}
                        onPress={() => {
                            navigation.navigate('Home');
                        }}>
                        <LeftArrowIcon name="keyboard-arrow-left" style={styles.icon} size={30} />
                    </TouchableOpacity>
                }
            />
            {isLoading ? <FavoriteShimmer /> : <Favorite />}
        </View>
    );
};

export default Favorites;
