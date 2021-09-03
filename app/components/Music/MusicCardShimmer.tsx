import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';

interface MusicProps {
  name?: string,
  model?: string,
  img?: string,
}

const MusicCardShimmer: React.FC<MusicProps> = ({
  name,
  model,
  img,
}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.ShimmertaskCard} >
        <View style={styles.Shimmerimgcontainer}>
          <Image style={styles.Shimmerimg} source={{}}></Image>
        </View>

      </TouchableOpacity>
      <View style={styles.ShimmernameContainer}>
        <View style={styles.ShimmertextWrapper}>
        <Text style={styles.ShimmerlabelStyle}></Text>
        <Text style={styles.Shimmermodel}></Text>
        </View>
      </View>
    </View>
  );
};

export default MusicCardShimmer;



