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

const MusicCard: React.FC<MusicProps> = ({
  name,
  model,
  img,
}) => {
  const styles = useStyles();

console.log('inininin nooor', name);
console.log('inininin nooor2222', model);
  // const styles = useStyles();
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.taskCard} >
        <View style={styles.imgcontainer}>
          <Image style={styles.img} source={{ uri: img }}></Image>
        </View>

      </TouchableOpacity>
      <View style={styles.nameContainer}>
        <View style={styles.textWrapper}>
        <Text style={styles.labelStyle}>{name}</Text>
        <Text style={styles.model}>{model}</Text>
        </View>
      </View>
    </View>
  );
};

export default MusicCard;



