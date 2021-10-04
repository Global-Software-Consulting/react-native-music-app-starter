import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LeftArrowIcon from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerParamList } from '../../navigation/DrawerNavigator';
import PlaylistShimmer from './PlaylistShimmer';
import PlaylistConatiner from './PlaylistConatiner';
import { AppState } from '../../models/reducers/app';
import { Loading } from '../../models/reducers/loading';
import { useNavigation } from '@react-navigation/native';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';

interface IState {
    appReducer: AppState;
    loadingReducer: Loading;
}
const Playlist: React.FC = () => {
    const isLoading = useSelector((state: IState) => state.loadingReducer.isLoginLoading);

    const { t } = useTranslation();
    type HomeScreenProp = StackNavigationProp<DrawerParamList, 'Home'>;
    const navigation = useNavigation<HomeScreenProp>();
    const styles = useStyles();
    useEffect(() => {
        if (isLoading) {
            <PlaylistShimmer />;
        } else {
            <PlaylistConatiner />;
        }
    });

    return (
        <View style={styles.container}>
            <AppHeader
                renderLeft={
                    <View style={{ flexDirection: 'row', padding: '5%' }}>
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

                        <Text style={styles.label}>{t('Playlist')}</Text>
                    </View>
                }
            />
            {isLoading ? <PlaylistShimmer /> : <PlaylistConatiner />}
        </View>
    );
};

export default Playlist;
