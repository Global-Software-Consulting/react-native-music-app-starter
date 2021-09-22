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
    icon: {
      paddingLeft: 15,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.colors.primary,
      position: 'absolute',
    },
    labelWrapper: {
    
      width: '10%',
      justifyContent: 'center',
      alignSelf: 'center'
    },
    ModalContainer: {
      // paddingLeft: 20,
      // paddingRight: 20,
      width: "100%",
      height: "70%",
      alignSelf: 'center',
      backgroundColor: theme.colors.accent,
      borderRadius: 10
    },
    label: {
      marginBottom: 12,
      fontSize: hp('2.5%'),
      fontWeight: 'bold',
      paddingLeft: '5%'
    },
    newListLabel: {
      flexDirection: 'row',
      paddingTop: '5%',
    },
    taskCard: {
      borderRadius: 12,
      paddingLeft: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',

    },
    noPlaylistText: {
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: hp('2.75%'),
      fontWeight: 'bold',
      color: theme.colors.primary,
      marginBottom: 10,


    },
    noMusicIcon: {
      // paddingLeft:15,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.colors.background,
    },
    model: {
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: hp('1.75%'),
      color: "darkgray",
      marginTop: -7,


    },
    folderContainer: {

      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: theme.colors.accent,
      marginBottom: 2,
      paddingLeft: 5,
      paddingRight:5,
    },
    name: {
      paddingTop:'1%',
      fontSize: hp('2%'),
      fontWeight: 'bold',
      color: theme.colors.background,
      // paddingLeft: '5%'

    },
    secondaryControl: {
      height: hp('7%'), // 70% of height device screen
      width: wp('10%'),
      // color:'orange',
    },
    off: {
      opacity: 0.30,
      color: theme.colors.primary
    },
    on: {
      color: 'orange'

    },
  });
  return styles;
}
export default useStyles;

