import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useTheme, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IPlayerState } from '../../models/reducers/player';
import Slider from 'react-native-slider';


function pad(n: any, width: any, z: any = 0) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position: any) => [
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
];
interface MusicProps {
  name?: string;
  model?: string;
  img?: string;
  trackLength?: any;
  currentPosition?: any;
  onSeek?: any;
  track?: any;
  onBack?: any;
  onForward?: any;
  playbackState: any;
  togglePlayback: any;
  title: string;
  url?: string;
  artist: string;
  sheetRef?: any;
}

interface IState {
  playerReducer: IPlayerState;
}

const PlyerBottom: React.FC<MusicProps> = ({
  title,
  url,
  img,
  artist,
  trackLength,
  currentPosition,
  onSeek,
  onBack,
  track,
  onForward,
  playbackState,
  togglePlayback,
  sheetRef
}) => {
  const theme = useTheme();
  const styles = useStyles();



  return (
    <View style={styles.PlayerBottomcontainer}>
      <TouchableOpacity
        onPress={
          () => {
            sheetRef.current.snapToIndex(1)
            // sheetRef.current.snapTo(0);
          }
        }>


        <View style={styles.Trackcontainer}>

          <Slider
            maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
            onSlidingComplete={onSeek}
            value={currentPosition}
            style={styles.slider}
            minimumTrackTintColor={'orange'}
            maximumTrackTintColor={theme.colors.background}
            thumbStyle={styles.thumb}
            trackStyle={styles.track}
          />

        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.imgcontainer}>
            <Image
              style={styles.image}
              source={{ uri: img }}
            />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={styles.TrackDetailcontainer}>
              <View style={styles.detailsWrapper}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <View style={styles.detailsWrapper}>
                  <Text style={styles.artist}>{artist}</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.Controlcontainer}>
                <TouchableOpacity onPress={() => onBack()} style={styles.controlButton}>
                  <Ionicons
                    name="play-skip-back-outline"
                    size={25}
                    color={theme.colors.accent}
                  />
                </TouchableOpacity>
                <View style={{ width: 5 }} />
                {playbackState == 'loading' ? (
                  <ActivityIndicator size="large" color="black" style={styles.activityIndicator} />
                ) : (
                  playbackState == 'paused' ? (
                    <TouchableOpacity onPress={() => togglePlayback(playbackState)} style={styles.playButton}>
                      <Ionicons
                        name="play"
                        size={25}
                        color={theme.colors.accent}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => togglePlayback(playbackState)} style={styles.playButton}>
                      <Ionicons
                        name="pause"
                        size={25}
                        color={theme.colors.accent}
                      />
                    </TouchableOpacity>
                  )
                )}
                <View style={{ width: 5 }} />
                <TouchableOpacity onPress={() => onForward()} style={styles.controlButton}>
                  <Ionicons
                    name="play-skip-forward-outline"
                    size={25}
                    color={theme.colors.accent}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export const useStyles = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      height: hp('100%'),
      flexDirection: 'row',
      backgroundColor: 'white',
    },
    PlayerBottomcontainer: {
      height: hp('100%'),
      flexDirection: 'row',
      backgroundColor: theme.colors.primary,
      justifyContent: 'flex-start',
      paddingLeft: 20
    },

    imgcontainer: {
      height: hp('10%'), // 70% of height device screen
      width: wp('15%'),
    },

    image: {
      height: hp('10%'), // 70% of height device screen
      width: wp('17%'),
      borderRadius: 10,
      shadowColor: 'red',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,

      elevation: 14,
    },
    text: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 5,
    },
    TrackDetailcontainer: {
      width: wp('45%'),
      flexDirection: 'row',
      paddingLeft: 5,
      paddingTop: 5,

    },
    title: {
      fontSize: hp('3%'),
      fontWeight: 'bold',
      color: theme.colors.accent,
      textAlign: 'left'
      // textAlign: 'center',
    },
    artist: {
      fontSize: hp('2%'),
      color: theme.colors.accent,
      textAlign: 'left'
      // marginTop: 4,
    },
    detailsWrapper: {
      paddingLeft: 5,
    },
    // <-------------------------Control Bar styles--------------->
    Controlcontainer: {
      flexDirection: 'row',
      padding: 10,

    },
    playButton: {
      justifyContent: 'center',
      alignSelf: 'center',
      height: hp('5%'), // 70% of height device screen
      width: wp('10%'),
      borderRadius: hp('15%') / 2,
      backgroundColor: 'orange',
      paddingLeft: 7,
      shadowColor: theme.colors.accent,
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,

      elevation: 14,
    },
    controlButton: {
      justifyContent: 'center',
      alignSelf: 'center',
      height: hp('5%'), // 70% of height device screen
      width: wp('10%'),
      borderRadius: hp('15%') / 2,
      paddingLeft: 5,
      shadowColor: theme.colors.accent,
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,

      elevation: 14,
    },
    secondaryControl: {
      height: hp('7%'), // 70% of height device screen
      width: wp('10%'),
    },
    off: {
      opacity: 0.3,
    },
    // <-------------------------Track Bar styles--------------->

    slider: {
      marginTop: -10,
      width: '90%',
      height: 40,
    },
    Trackcontainer: {
      height: 20,
      // paddingTop:5,
      paddingLeft: 2,
      paddingRight: 2,
      backgroundColor: 'transparent',
    },
    track: {
      // width:5,
      height: 3.5,
      borderRadius: 1,
    },
    thumb: {
      height: hp('2.5%'), // 70% of height device screen
      width: wp('4.5%'),
      borderRadius: 10,
      color:theme.colors.accent
    },
    activityIndicator: {

      // flex: 1,
      padding: 55,
      justifyContent: 'center',
      alignItems: 'center',
      height: 70
    },
    line: {
      maxWidth: wp('25%'),
      justifyContent: 'center',
      margin: 10,
      marginLeft:"32%",
      borderBottomColor: 'white',
      borderBottomWidth: 1,
    }
  });
  return styles;
};
export default PlyerBottom;
