import React from 'react';
import {View,ScrollView,FlatList,TouchableOpacity} from 'react-native';
import {Button,Text} from 'react-native-paper';
import { tracks } from '../../components/data/tracks';
import {useDispatch} from 'react-redux';
import * as loginActions from 'store/actions/loginActions';
import useStyles from './styles';
import MusicCard from '../../components/Music/MusicCard';
import Header from '../../components/Header';
interface Itrack {

  id: string
  url: string
  title: string
  artist: string
  artwork: string
  album: string
  duration: number
}
const Favorites: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());
  const Track: Itrack[] = tracks;
  console.log('in favvv ', Track.length);
  const styles = useStyles();
  return (
    <>
    <Header title="Liked Songs"/>
    <View style={styles.container}>
          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-start' }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            data={Track}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.Musiccontainer}>
              <MusicCard
                name={item.title}
                model={item.album}
                img={item.artwork}
              />
              </View>
            )}


          />
      
    
    </View>
    </>
  );
};

export default Favorites;
