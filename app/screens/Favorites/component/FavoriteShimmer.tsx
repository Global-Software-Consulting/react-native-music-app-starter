import React, { useState } from 'react';
import { View, FlatList, RefreshControl,ScrollView,StatusBar ,Text} from 'react-native';
import { tracks } from '../../../data/tracks';
import { useDispatch } from 'react-redux';
import useStyles from '../styles';
import LeftArrowIcon from 'react-native-vector-icons/MaterialIcons';
import MusicCardShimmer from '../../../components/Music/MusicCardShimmer';
import Header from '../../../components/Header';
import AppHeader from '../../../components/AppHeader';
interface Itrack {

  id: string
  url: string
  title: string
  artist: string
  artwork: string
  album: string
  duration: number
}
const FavoriteShimmer: React.FC<any> = (props,navigation) => {
  const dispatch = useDispatch();
  const Track: Itrack[] = tracks;
  const styles = useStyles();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <>
      <View style={styles.container}>
      <ScrollView
         refreshControl={<RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          />}
        >
        <Header title="Liked Songs" />

        <FlatList
          contentContainerStyle={{ alignSelf: 'flex-start' }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          data={Track}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.Musiccontainer}>
              <MusicCardShimmer
                name={item.title}
                model={item.album}
                img={item.artwork}
              />
            </View>
          )}
        />

</ScrollView>
      </View>
    </>
  );
};

export default FavoriteShimmer;
