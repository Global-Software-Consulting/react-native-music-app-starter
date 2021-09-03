import React,{useState} from 'react';
import { View, ScrollView, FlatList, RefreshControl,ToastAndroid } from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from '../styles';
import { useTranslation } from 'react-i18next';
import Header from '../../../components/Header';
import i18n from "../../../components/Languages/i18n";
import { tracks } from '../../../components/data/tracks';
import MusicCard from '../../../components/Music/MusicCard';


const initI18n = i18n;
interface Itrack {

  id: string
  url: string
  title: string
  artist: string
  artwork: string
  album: string
  duration: number
};

const HomeComponent: React.FC<any> = (props): JSX.Element => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [listData, setListData] = useState<any>(tracks);
  const { t, i18n } = useTranslation();
  const Track: Itrack[] = tracks;
  const styles = useStyles();
  const wait = (timeout:number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
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
          <Header title="Recommended for you" />
          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-start' }}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={Track}
            scrollEventThrottle={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (

              <MusicCard
                name={item.title}
                model={item.album}
                img={item.artwork}
              />


            )}


          />
          <Header title="My Playlist" />

          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-start' }}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={Track}
            keyExtractor={(item) => item.id}
            // renderItem={renderItemsss}
            renderItem={({ item }) => (

              <MusicCard
                name={item.title}
                model={item.album}
                img={item.artwork}
              />


            )}


          />
        </ScrollView>

      </View>
    </>
  );
};

export default HomeComponent;
