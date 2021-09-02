import { StyleSheet } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme } from 'react-native-paper';

export const useStyles = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom:5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.accent,

    },
    Musiccontainer: {
      backgroundColor: theme.colors.accent,
    },


  });
  return styles;
}
export default useStyles;

