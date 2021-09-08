import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme, Text } from 'react-native-paper';
const win = Dimensions.get('window');

interface AppHeaderProps {
  title?: string,
  renderLeft?: Element
}
const AppHeader: React.FC<AppHeaderProps> = ({ renderLeft, title }) => {
  const styles = useStyles();
  return (
    <>
      <View style={styles.container}>
        {renderLeft && renderLeft}
        <View style={styles.labelWrap}>
          <View style={{ flexDirection: 'row', justifyContent: "center", marginRight: 5 }}>
            <Text style={styles.labelStyle}>{title}</Text>
          </View>

        </View>

      </View>
    </>
  );
};
export const useStyles = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      marginTop: 2,
      flexDirection: 'row',
      backgroundColor: theme.colors.accent,
      height: hp('10%'), // 70% of height device screen
      alignItems: 'center',
      borderBottomColor: "lightgray",
      borderBottomWidth: hp('0.1%'),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    labelStyle: {
      fontSize: hp('3%'),
      fontWeight: 'bold',
      // color: theme.colors.accent,

    },
    labelWrap: {
      flex: 1,
      marginRight: 25,
      justifyContent: 'center',
      alignSelf: 'center'
      // color: theme.colors.accent,

    }
  });
  return styles;
}
export default AppHeader;