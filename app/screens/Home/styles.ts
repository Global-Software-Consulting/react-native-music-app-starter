import {DefaultTheme as dF} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:dF.colors.background,
  },
  labelStyle: {
    fontSize: 12,
    marginBottom:12
  }
});

import { useTheme } from 'react-native-paper';

export const useStyles = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
      
        container: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:theme.colors.accent,
          marginBottom:2
                },
        labelStyle: {
          marginBottom:12,
          fontSize: hp('2.5%'),
          fontWeight:'bold'
        },
 
    taskCard: {
      borderRadius: 12,
      padding: 5,
      paddingLeft:15,
      flexDirection: 'row',
    },
  
    
  
    model: {
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: hp('1.75%'),
      color:"darkgray",
      marginTop:-7
     
    },
    name: {
      fontSize: hp('2%'),
      fontWeight: 'bold',

    },
    textWrapper: {
      justifyContent:'center',
      alignItems:'center',
      height: hp('5%'), // 70% of height device screen
      width: wp('50%'),   // 80% of width device screen
    },
    nameContainer: {
      height: hp('7%'), // 70% of height device screen
      width: wp('50%') ,  // 80% of width device screen
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
    },
    imgcontainer: {
      height: hp('26%'), // 70% of height device screen
      width: wp('45%') , 
      flexDirection: 'row',
      borderRadius:10,
      shadowColor: 'blue',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: .2,
      shadowRadius: 8,
      elevation: 20,

    },
    img: {
      //padding: 20,
      resizeMode:'cover',
      height: hp('26%'), // 70% of height device screen
      width: wp('45%') ,  // 80% of width device screen
      borderRadius:10,
   

    },
        
    });
    return styles;
}
export default useStyles;
