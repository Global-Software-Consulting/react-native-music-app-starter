import React from 'react';
import { View, ScrollView, FlatList, ListRenderItem,TouchableOpacity,Image } from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import i18n from "../../components/Languages/i18n";
import { tracks } from '../../components/data/tracks';
import MusicCard from '../../components/MusicCard';
const initI18n = i18n;
interface Itrack {

  id: string
  url: string
  title: string
  artist: string
  artwork: string
  album: string
  duration: number
}
const Home: React.FC<any> = (props): JSX.Element => {
  const { t, i18n } = useTranslation();
  const Track: Itrack[] = tracks;

  const styles = useStyles();
  console.log('itemitemitemieitmemtiemt');

  return (
    <>
      <Header title="Recommended for you" />
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-start' }}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={Track}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.container}>

      <TouchableOpacity style={styles.taskCard} >
        <View style={styles.imgcontainer}>
          <Image style={styles.img} source={{ uri: item.artwork }}></Image>
        </View>

      </TouchableOpacity>
      <View style={styles.nameContainer}>
        <View style={styles.textWrapper}>
        <Text style={styles.labelStyle}>{item.title}</Text>
        <Text style={styles.model}>{item.album}</Text>
        </View>
      </View>
    </View>
//               <>
              
//   <View style={{flexDirection:'column'}}> 
//   <Text>{item.title}</Text>
//       <Text>{item.album}</Text>
//       </View>
//       <Text>{item.artwork}</Text> 
// </>
              // <MusicCard
              //   name={item.title}
              //   model={item.album}
              //   img={item.artwork}
              // />
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
              <View style={styles.container}>

      <TouchableOpacity style={styles.taskCard} >
        <View style={styles.imgcontainer}>
          <Image style={styles.img} source={{ uri: item.artwork }}></Image>
        </View>

      </TouchableOpacity>
      <View style={styles.nameContainer}>
        <Text style={styles.labelStyle}>{item.title}</Text>

        <Text style={styles.model}>{item.album}</Text>

        

      </View>
    </View>
            )}


          />
        </ScrollView>
        <Text style={styles.labelStyle}>{t('Home Sreen')} </Text>
        <Text style={styles.labelStyle}>{t('Dark Theme')} </Text>
      </View>
    </>
  );
};

export default Home;
