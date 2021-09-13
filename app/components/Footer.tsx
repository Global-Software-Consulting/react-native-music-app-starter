import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme, Text } from 'react-native-paper';
import musicList from '../../services/musicList';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { IAppState } from '../../models/reducers/app';
import Slider from 'react-native-slider';
import TrackPlayer, { Capability, useProgress } from "react-native-track-player";
interface FooterProps {
  title?: string,
  url?: string,
  trackLength?:any,
  currentPosition?:any,
  onSlidingStart?:any,
}
interface IState {
  appReducer: IAppState;
}
const Footer: React.FC<FooterProps> = (props): JSX.Element => {
  const musicList = useSelector((state: IState) => state.appReducer.musicList);
  const [sliderValue, setSliderValue] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState<boolean>(true);
  const theme = useTheme();
  const styles = useStyles();
  const onPressPlay = async () => {
    TrackPlayer.play();
    setPaused(true);

    // setPosition(pos)
    const dur = await TrackPlayer.getDuration();
    // setDuration(dur);

  };
  const onPressPause = () => {
    TrackPlayer.pause();
    setPaused(false);
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
    console.log("nexttt");
    
    // playNextPrev('next');
  };
  const onBack = () => {
    console.log("previousss");

    // playNextPrev('prev');
  };
  const onSeek = async (value: any) => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };

  return (
    <>
    <TouchableOpacity>
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
   
      {/* <View style={{ flexDirection: 'row' }}> */}
      <View style={styles.imgcontainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
        />
      </View>
      <View style={styles.TrackDetailcontainer}>
        <View style={styles.detailsWrapper}>
          <Text style={styles.title} >Chaff and Dust</Text>
          <View style={styles.detailsWrapper}>

            <Text style={styles.artist} >Hanna Munstanna</Text>
          </View>
        </View>
       <View style={styles.Controlcontainer}>

        <View style={{ width: 10 }} />
        <TouchableOpacity onPress={() => onBack()}>
          <Ionicons
            name="play-skip-back-outline"
            size={25}
            color={theme.colors.primary}
            onPress={() => onBack()}
          />
        </TouchableOpacity>
        <View style={{ width: 20 }} />
        {paused ?
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
    </>
  );
};

export const useStyles = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({

    container: {
      height: hp('12%'),
      // backgroundColor: theme.colors.accent,
      // backgroundColor: "red",
      flexDirection: 'row'
    },
    imgcontainer: {
      // marginTop: 5,
      height: hp('10%'), // 70% of height device screen
      width: wp('10%'),
      // justifyContent: 'center',
      borderRadius: 10,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: .2,
      shadowRadius: 8,
      elevation: 20,
      // backgroundColor: theme.colors.accent,

    },
    image: {
      height: hp('10%'), // 70% of height device screen
      width: wp('15%'),
      // borderRadius: 10
    },
    TrackDetailcontainer: {
      width: wp('100%'),
      flexDirection: 'row',
      paddingLeft: 25,
      paddingTop: 5,
      // alignItems: 'center',
      // paddingRight: 20,
      // backgroundColor: "red",

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
      // justifyContent: 'center',
      // alignItems: 'center',
      // flex: 1,
      // paddingLeft: 25,
    },
    // <-------------------------Control Bar styles--------------->
    Controlcontainer: {
      flexDirection:'row',
     flex:1,
     padding:10,
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
        height:20,
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor:'transparent'
  
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