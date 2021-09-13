import { DefaultTheme as dF } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme } from 'react-native-paper';

export const useStyles = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({

    container: {
     flex:1,
      backgroundColor: theme.colors.accent,
    },
    label: {
      marginBottom: 12,
      fontSize: hp('2.5%'),
      fontWeight: 'bold'
    },
    model: {
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: hp('2%'),
      color: "darkgray",
      

    },

  });
  return styles;
}
export default useStyles;
