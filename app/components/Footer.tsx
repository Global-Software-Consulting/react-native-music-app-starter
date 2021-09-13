import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useTheme ,Text} from 'react-native-paper';

interface TitleProps {
    title: string,
    
  }

const Footer : React.FC<TitleProps> = (props) : JSX.Element => {
    const styles =useStyles();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.labelStyle}>{props.title}</Text>
      </View>

    </View>
  );
};

export const useStyles = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
      
        container: {
            padding: 15,
            flexDirection: 'row',
            alignItems: 'center',
          backgroundColor:theme.colors.accent
        },
        labelStyle: {
            fontSize: hp('3%'),
            fontWeight:'bold',
            // color: theme.colors.accent,
           
          }
    });
    return styles;
}
export default Footer;