import React, { useState, useEffect } from 'react';
import { View, ScrollView, StatusBar, RefreshControl } from 'react-native';
import LeftArrowIcon from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import PlayerShimmer from './component/PlayerShimmer';
import Album from '../../components/player/Album';
import TrackBar from '../../components/player/TrackBar';
import {useRoute} from '@react-navigation/native';

// import PlayerComponent from './component/PlayerComponent';

const Player: React.FC = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const item = route.params.item;
  const [refreshing, setRefreshing] = useState<boolean>(false);
  // const [paused, setPaused] = useState<boolean>(true);
  // const [totalLength, setTotalLength] = useState<number>(1);
  // const [currentPosition, setCurrentPosition] = useState<number>(0);
  // const [selectedTrack, setSelectedTrack] = useState<number>(0);
  // const [repeatOn, setRepeatOn] = useState<boolean>(false);
  // const [shuffleOn, setShuffleOn] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const styles = useStyles();
  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  useEffect(() => {
    onRefresh();
  }, []);

  const onRefresh = () => {
    if (refreshing) {
      <PlayerShimmer />;
    } else {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }
  };
  console.log("itemmmm:", item);
  return (
     
    
     
      <View style={styles.container}>
      <AppHeader 
    renderLeft={ <LeftArrowIcon
      name="keyboard-arrow-left"
      style={styles.icon}
      size={30}
      onPress={() => navigation.navigate('Home')}
    />}
    title="Playing Now"
    />
     <Album url={item.artwork}
     title={item.title} artist={item.album}/>
        <TrackBar 
        trackLength={204} currentPosition={25} 
        // onSeek={this.seek.bind(this)}
        // trackLength={totalLength}
        // onSlidingStart={setPaused(true)}
        // currentPosition={currentPosition}
        />
      </View>
    

  );
};

export default Player;
