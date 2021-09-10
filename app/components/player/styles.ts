import { DefaultTheme as dF } from 'react-native-paper';
import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme } from 'react-native-paper';
import styles from 'app/screens/Settings/styles';

export const useStyles = () => {
  const theme = useTheme();
  const { width, height } = Dimensions.get('window');
  const imageSize = width - 48;
  const styles = StyleSheet.create({

    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.accent,
      // backgroundColor: "red",
      marginBottom: 2,
      paddingLeft: 24,
      paddingRight: 24,
    },
    TrackDetailcontainer: {
      flexDirection: 'row',
      paddingLeft: 20,
      alignItems: 'center',
      paddingRight: 20,
      // backgroundColor: "red",

    },
    VolumeContainer: {

      height: hp('8%'), // 70% of height device screen
      width: wp('90%'),
      paddingTop:5,
      flexDirection: 'row',
      alignItems: 'center',

    },

    labelStyle: {
      marginBottom: 12,
      fontSize: hp('2.5%'),
      fontWeight: 'bold'
    },
    taskCard: {
      borderRadius: 12,
      paddingLeft: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',

    },
    image: {
      height: hp('45%'), // 70% of height device screen
      width: wp('80%'),
      borderRadius: 10
    },


    model: {
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: hp('1.75%'),
      color: "darkgray",
      marginTop: -7,


    },
    name: {
      fontSize: hp('2%'),
      fontWeight: 'bold',

    },
    textWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      height: hp('5%'), // 70% of height device screen
      width: wp('45%'),   // 80% of width device screen
    },
    nameContainer: {
      height: hp('7%'), // 70% of height device screen
      width: wp('50%'),  // 80% of width device screen
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    imgcontainer: {
      marginTop: 5,
      height: hp('47%'), // 70% of height device screen
      width: wp('80%'),
      justifyContent: 'center',
      borderRadius: 10,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: .2,
      shadowRadius: 8,
      elevation: 20,
      // backgroundColor: theme.colors.accent,

    },
    img: {
      resizeMode: 'cover',
      height: hp('26%'), // 70% of height device screen
      width: wp('43%'),  // 80% of width device screen
      borderRadius: 10,


    },
    detailsWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      paddingLeft: 25,
    },
    title: {
      fontSize: hp("3%"),
      fontWeight: 'bold',
      textAlign: 'center',
    },
    artist: {
      fontSize: hp("2%"),
      marginTop: 4,
    },
    button: {
      opacity: 0.72,
    },
    favoriteIcon: {
      opacity: 0.72,
      borderRadius: 10,
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    // <-------------------------Track Bar styles--------------->

    slider: {
      marginTop: -12,

    },
    Trackcontainer: {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      // backgroundColor:'red'

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
    text: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom:5
    },
    // <-------------------------Control Bar styles--------------->
    Controlcontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    playButton: {
      height: hp('12%'), // 70% of height device screen
      width: wp('10%'),
      borderRadius:hp('15%')/ 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondaryControl: {
      height: hp('7%'), // 70% of height device screen
      width: wp('10%'),
    },
    off: {
      opacity: 0.30,
    }
  });
  return styles;
}
export default useStyles;
