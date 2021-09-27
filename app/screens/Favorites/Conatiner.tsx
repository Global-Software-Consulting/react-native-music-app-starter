import React from 'react';
import { View, FlatList, TouchableHighlight } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import MusicCard from '../../components/Music/MusicCard';
import Header from '../../components/Header';
import { favoriteListRequest } from '../../store/actions/appActions';
import { AppState } from '../../models/reducers/app';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IState {
    appReducer: AppState;
}

const Favorite: React.FC<any> = (): JSX.Element => {
    const styles = useStyles();
    const dispatch = useDispatch();
    const favoriteList = useSelector((state: IState) => state.appReducer.favoriteList);
    const removeFavorites = (id: any) => {
        const data = favoriteList?.filter((element: any) => element.id !== id);
        dispatch(favoriteListRequest(data));
    };
    const favoriteRenderItem = ({ item }: any) => (
        <TouchableHighlight
            key={item}
            underlayColor="gray"
            onPress={() => {
                removeFavorites(item.id);
            }}>
            <View style={styles.Musiccontainer}>
                <MusicCard name={item.title} model={item.artist} img={item.artwork} />
                <Ionicons
                    name="heart"
                    style={styles.favIcon}
                    size={30}
                    onPress={() => {
                        removeFavorites(item.id);
                    }}
                />
            </View>
        </TouchableHighlight>
    );

    return (
        <View style={styles.container}>
            <Header title="Liked Songs" />
            {favoriteList?.length > 0 ? (
                <FlatList
                    contentContainerStyle={{ alignSelf: 'flex-start' }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                    data={favoriteList}
                    renderItem={favoriteRenderItem}
                />
            ) : (
                <View style={styles.container}>
                    <Text style={styles.model}>No Favorities Available</Text>
                </View>
            )}
        </View>
    );
};

export default Favorite;
