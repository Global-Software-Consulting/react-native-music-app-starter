import { StyleSheet } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme } from 'react-native-paper';

export const useStyles = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.accent,
      // backgroundColor:'red'
    },
    playlistContainer: {
      flex: 1,
      padding:"5%",
      backgroundColor: theme.colors.accent,
      // backgroundColor:'red'
    },
    noPlaylistContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: theme.colors.accent,
      // backgroundColor:'red'
    },
    Musiccontainer: {
      backgroundColor: theme.colors.accent,
      
    },
    noPlaylistText: {
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: hp('2.75%'),
      fontWeight: 'bold',
      color: theme.colors.primary,
      marginBottom: 10,


    },
    model: {
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: hp('2%'),
      color: "darkgray",


    },
    icon: {
      paddingLeft: 15,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.colors.primary,
      position: 'absolute',
    },
    favIcon: {
      paddingLeft: wp('5%'),
      paddingTop: hp('21.5%'),
      alignSelf: 'flex-start',
      color: 'red',
      position: 'absolute',
    },
    label: {
      // paddingTop:'5%',
      fontSize: hp('2%'),
      fontWeight: 'bold',
    },
    labelWrapper: {
      width: '45%',
      justifyContent: 'center',
      alignSelf: 'center'
    },
    labelNameWrapper: {
      marginLeft: '5%',
      // alignItems:'flex-end',
      width: wp('20%'),
      justifyContent: 'flex-end',
      marginTop: hp('35%'),
      backgroundColor: theme.colors.primary

    },
    labelPlaylist: {
      paddingLeft: '10%',
      fontSize: hp('3%'),
      fontWeight: 'bold',
      color: theme.colors.accent
    },
    noMusicIcon: {
      // paddingLeft:15,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.colors.background,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
  });
  return styles;
}
export default useStyles;

