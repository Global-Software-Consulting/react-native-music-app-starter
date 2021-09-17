import { DefaultTheme as dF } from 'react-native-paper';
import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme } from 'react-native-paper';

export const useStyles = () => {
  const theme = useTheme();
  const { width, height } = Dimensions.get('window');
  const imageSize = width - 48;
  const styles = StyleSheet.create({
    // Index styles
    Indexcontainer: {
      justifyContent: 'center',
      height: hp('100%'),
      flexDirection: 'row',
      backgroundColor: 'white',
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.accent,
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

    label: {
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
      width:wp ('80%')

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
      height: hp('10%'), // 70% of height device screen
      width: wp('20%'),
      borderRadius:hp('15%')/ 2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'orange',
      paddingLeft: 7,
      shadowColor: theme.colors.primary,
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
      backgroundColor:'lightgray',
      alignSelf: 'center',
      height: hp('5%'), // 70% of height device screen
      width: wp('10%'),
      borderRadius: hp('15%') / 2,
      paddingLeft: 5,
      shadowColor: theme.colors.primary,
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
      // color:'orange',
    },
    off: {
      opacity: 0.30,
      color:'black'
    },
    on: {
      color:'orange'

    },
    activityIndicator:{
      
      // flex: 1,
      padding:55,
      justifyContent: 'center',
      alignItems: 'center',
      height: 70
    },
   
    Musiccontainer: {
      backgroundColor: theme.colors.accent,
    },

    icon: {
      paddingLeft:25,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color:theme.colors.primary
    },
    Dropicon: {
      marginLeft: wp('15%'),
      justifyContent:'center',
    },
    
    audioElement: {
      height: 0,
      width: 0,
    },
    line: {
      width: wp('35%'),
      justifyContent: 'center',
      marginLeft: wp('30%'),
      marginBottom:25,
      borderBottomColor:theme.colors.primary,
      borderBottomWidth: 1.5,
      // marginRight:44,
    },
    wrapHeader: {
      backgroundColor:'red',
      justifyContent:'center',
      flexDirection:'row',
      width:'100%',
      marginBottom:30
    },

  });
  return styles;
};
 
export default useStyles;
