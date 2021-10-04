import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LeftArrowIcon from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerParamList } from '../../navigation/DrawerNavigator';
import PlaylistAndAlbumsShimmer from './PlaylistAndAlbumsShimmer';
import PlaylistAndAlbumsConatiner from './PlaylistAndAlbumsConatiner';
import { AppState } from '../../models/reducers/app';
import { Loading } from '../../models/reducers/loading';

interface IState {
    appReducer: AppState;
    loadingReducer: Loading;
}
const Favorites: React.FC = () => {
    const isLoading = useSelector((state: IState) => state.loadingReducer.isLoginLoading);

    const { t } = useTranslation();
    type HomeScreenProp = StackNavigationProp<DrawerParamList, 'Home'>;
    const navigation = useNavigation<HomeScreenProp>();
    const styles = useStyles();
    useEffect(() => {
        onRefresh();
    });

    const onRefresh = () => {
        // getFavoriteList();
        if (isLoading) {
            <PlaylistAndAlbumsShimmer />;
        } else {
            <PlaylistAndAlbumsConatiner />;
        }
    };

    return (
        <View style={styles.container}>
            <AppHeader
                renderLeft={
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Home');
                            }}>
                            <LeftArrowIcon
                                name="keyboard-arrow-left"
                                style={styles.icon}
                                size={30}
                            />
                        </TouchableOpacity>
                        <View style={styles.labelWrapper} />

                        <Text style={styles.label}>{t('Playlists')}</Text>
                    </View>
                }
            />
            
            {isLoading ? <PlaylistAndAlbumsShimmer /> : <PlaylistAndAlbumsConatiner />}
        </View>
    );
};

export default Favorites;
