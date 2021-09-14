import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme, Text } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { IAppState } from '../models/reducers/app';
import { IPlayerState } from '../models/reducers/player';
import Slider from 'react-native-slider';
import TrackPlayer, { Capability, useProgress } from "react-native-track-player";
import { isPlayerPlay } from '../store/actions/playerActions';
import { useNavigation } from '@react-navigation/native';


interface FooterProps {
  title?: string,
  url?: string,
  trackLength?: any,
  currentPosition?: any,
  onSlidingStart?: any,
  isShowFooter?: Element,
  artwork?: any,
  artist?: any,

}
interface IState {
  appReducer: IAppState;
  playerReducer: IPlayerState;
}

const Footer: React.FC<any> = (props, isShowFooter): JSX.Element => {
  const currentPlayer: any = useSelector((state: IState) => state.playerReducer.playerList);
  const isPlayerShown = useSelector((state: IState) => state.playerReducer.isPlayer);
  const isPlay = useSelector((state: IState) => state.playerReducer.isPlayerPlay);
  const [sliderValue, setSliderValue] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [duration, setDuration] = useState(0);
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = useStyles();
  const onPressPlay = async () => {
    dispatch(isPlayerPlay(true));
    TrackPlayer.play();

    // setPosition(pos)
    const dur = await TrackPlayer.getDuration();
    // setDuration(dur);

  };
  // const filterPlayList =(id: any) => {
  //   let data = pList?.filter((element: any) => element.id != id)
  //   dispatch(playerListRequest(data));
  // };
  const onPressPause = () => {
    dispatch(isPlayerPlay(false))
    TrackPlayer.pause();
  };
  // const playNextPrev = async (prevOrNext: 'prev' | 'next') => {
  //   // const currentTrackId = await TrackPlayer.getCurrentTrack();
  //   const currentTrackId = await selectedTrack?.id;
  //   if (!currentTrackId) return;
  //   const trkIndex = musicList.findIndex((trk: any) => trk.id == currentTrackId);

  //   if (prevOrNext === 'next' && trkIndex < musicList.length - 1) {
  //     onTrackItemPress(musicList[trkIndex + 1]);
  //   }
  //   if (prevOrNext === 'prev' && trkIndex > 0) {
  //     onTrackItemPress(musicList[trkIndex - 1]);
  //   }
  // };

  const onForward = () => {
    // playNextPrev('next');
  };
  const onBack = () => {
    // playNextPrev('prev');
  };
  const onSeek = async (value: any) => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };

  return (
    <>
      {isPlayerShown &&
        <View style={styles.container}>
          <TouchableOpacity   onPress={() =>
          navigation.navigate('Player', {
         hidePlayer:true,
         item:currentPlayer
          })
        }>
            <View style={styles.Trackcontainer}>
              <Slider
                style={styles.slider}
                //  onSlidingStart={onSlidingStart}

                //  maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
                onSlidingComplete={onSeek}
                minimumTrackTintColor={theme.colors.primary}
                maximumTrackTintColor={theme.colors.background}
                thumbStyle={styles.thumb}
                trackStyle={styles.track} />
            </View>
            <View style={styles.container}>

              <View style={styles.imgcontainer}>
                <Image
                  style={styles.image}
                  source={{ uri: currentPlayer?.artwork }}
                />
              </View>
              <View style={styles.TrackDetailcontainer}>
                <View style={styles.detailsWrapper}>
                  <Text style={styles.title} >{currentPlayer?.title}</Text>
                  <View style={styles.detailsWrapper}>

                    <Text style={styles.artist} >{currentPlayer?.artist}</Text>
                  </View>
                </View>

                <View style={styles.Controlcontainer}>

                  <View style={{ width: 30 }} />
                  <TouchableOpacity onPress={() => onBack()}>
                    <Ionicons
                      name="play-skip-back-outline"
                      size={25}
                      color={theme.colors.primary}
                      onPress={() => onBack()}
                    />
                  </TouchableOpacity>
                  <View style={{ width: 20 }} />
                  { isPlay ?
                    <TouchableOpacity onPress={() => onPressPause()}>
                      <View style={styles.playButton}>
                        <Ionicons
                          name="pause"
                          size={25}
                          color={theme.colors.primary}
                        />
                      </View>
                    </TouchableOpacity> :
                    <TouchableOpacity onPress={() => onPressPlay()}>
                      <View style={styles.playButton}>
                        <Ionicons
                          name="play"
                          size={25}
                          color={theme.colors.primary}
                        />
                      </View>
                    </TouchableOpacity>
                  }
                  <View style={{ width: 10 }} />
                  <TouchableOpacity onPress={() => onForward()}>
                    <Ionicons
                      name="play-skip-forward-outline"
                      size={25}
                      color={theme.colors.primary}
                      onPress={() => onForward()}
                    />

                  </TouchableOpacity>


                </View>
              </View>



            </View>
          </TouchableOpacity>

        </View>}
      {/* } */}
    </>
  );
};

export const useStyles = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({

    container: {
      height: hp('15%'),
      flexDirection: 'row'
    },
    imgcontainer: {
      height: hp('10%'), // 70% of height device screen
      width: wp('10%'),
      borderRadius: 10,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: .2,
      shadowRadius: 8,
      elevation: 20,

    },
    image: {
      height: hp('10%'), // 70% of height device screen
      width: wp('15%'),
    },
    TrackDetailcontainer: {
      width: wp('100%'),
      flexDirection: 'row',
      paddingLeft: 20,
      paddingTop: 5,
      // alignItems: 'center',
      // paddingRight: 20,

    },
    title: {
      fontSize: hp("3%"),
      fontWeight: 'bold',
      // textAlign: 'center',
    },
    artist: {
      fontSize: hp("2%"),
      // marginTop: 4,
    },
    detailsWrapper: {

      paddingLeft: 5,
    },
    // <-------------------------Control Bar styles--------------->
    Controlcontainer: {
      flexDirection: 'row',
      flex: 1,
      padding: 10,
    },
    playButton: {
      height: hp('12%'), // 70% of height device screen
      width: wp('10%'),
      borderRadius: hp('15%') / 2,

    },
    secondaryControl: {
      height: hp('7%'), // 70% of height device screen
      width: wp('10%'),
    },
    off: {
      opacity: 0.30,
    },
    // <-------------------------Track Bar styles--------------->

    slider: {
      marginTop: -12,

    },
    Trackcontainer: {
      height: 20,
      paddingLeft: 2,
      paddingRight: 2,
      backgroundColor: 'transparent'

    },
    track: {
      height: 3.5,
      borderRadius: 1,

    },
    thumb: {
      height: hp('2.5%'), // 70% of height device screen
      width: wp('4.5%'),
      borderRadius: 10,
    },
  });
  return styles;
}
export default Footer;