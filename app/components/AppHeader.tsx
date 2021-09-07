import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LeftArrowIcon from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme, Text } from 'react-native-paper';
import { isIphoneX } from 'app/lib/isIphoneX';
const win = Dimensions.get('window');

interface AppHeaderProps {
  title: string,
  isBack: any,
  isExit: any,
  text: string,
  onPress: any,
  renderLeft: React.ReactNode
}
const AppHeader: React.FC<AppHeaderProps> = ({ title, isBack, isExit, onPress, renderLeft }) => {
  const styles = useStyles();
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: isBack && isExit ? 'flex-start' : 'flex-start',
          marginLeft: isBack && isExit ? 10 : 0,
        },
      ]}>
      {isBack &&
        <TouchableOpacity
          onPress={() => navigation.navigate('My Music App')}
          style={styles.iconView}>
        </TouchableOpacity>
      }
      {renderLeft && renderLeft}
    </View>
  );
};
export const useStyles = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: theme.colors.accent,
      height: hp('10%'), // 70% of height device screen
      alignItems: 'center',
      borderBottomColor:"lightgray",
      borderBottomWidth:hp('0.1%'),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },

    icon: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.colors.primary
    },
    title: {
      fontWeight: 'bold',
      fontSize: hp('3%'),
      paddingLeft: 10,
    },
    text: {
      marginTop: 10,
      alignSelf: 'flex-end',
      marginLeft: 80,
    },
    iconView: {
      // backgroundColor: theme.colors.accent,
      justifyContent: 'center',
      alignItems: 'center',

      width: 30,
      height: 30,
      borderRadius: 30 / 2,
    },
    infoContainer: {
      flexDirection: 'row',
      //  alignItems: 'center',
      backgroundColor: theme.colors.accent,
    },
  });
  return styles;
}
export default AppHeader;