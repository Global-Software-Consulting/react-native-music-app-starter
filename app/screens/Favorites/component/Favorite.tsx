import React,{useState} from 'react';
import {View,FlatList,RefreshControl,ScrollView} from 'react-native';
import {Button,Text} from 'react-native-paper';
import { tracks } from '../../../components/data/tracks';
import {useDispatch, useSelector} from 'react-redux';
import useStyles from '../styles';
import MusicCard from '../../../components/Music/MusicCard';
import Header from '../../../components/Header';
interface Itrack {

  id: string
  url: string
  title: string
  artist: string
  artwork: string
  album: string
  duration: number
}
const Favorite: React.FC<any> = (props): JSX.Element => {
  const [listData, setListData] = useState<any>(tracks);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const dispatch = useDispatch();
  const Track: Itrack[] = tracks;
  console.log('in favvv ', Track.length);
  const styles = useStyles();
  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
console.log("helloo",props?.listData?.length );


  return (
    <View style={styles.container}>
    <ScrollView
         refreshControl={<RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          />}
        >
        <Header title="Liked Songs" />
    {props?.listData?.length >0 ? (
      
          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-start' }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            data={props.listData}
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
           ) : (
            <View style={styles.container}>
             <Text style={styles.model}>No Favorities Available</Text>
            </View>
            
          )}
   </ScrollView>
    </View>
  
  );
};

export default Favorite;
