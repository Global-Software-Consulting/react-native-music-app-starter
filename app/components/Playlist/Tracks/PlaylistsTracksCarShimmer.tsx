import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from '../PlaylistSongs/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface MusicProps {
  name?: string,
  model?: string,
  img?: string,
  onPressRemove?: any,
  showDel?: any,
  onPressModal?: any,
  item?: any,
  setSong?: any,
  playlistRef?: any,

}

const PlaylistsTracksCarShimmer: React.FC<MusicProps> = ({
  name,
  model,
  img,
  setSong,
  item,
  playlistRef
}) => {
  const styles = useStyles();
  return (
    <View style={styles.trackShimmercontainer}>

      <TouchableOpacity style={styles.ShimmertaskCard} >
        <View style={styles.Shimmerimgcontainer}>
          <Image style={styles.Shimmerimg} source={{ }}></Image>
        </View>

      </TouchableOpacity>
      <View style={styles.ShimmernameContainer}>
        <View style={styles.ShimmertextWrapper}>
          <Text style={styles.Shimmerlabel}></Text>
          <Text style={styles.Shimmermodel}></Text>
        </View>

      </View>
      <View style={{ width: '15%' }} />
      <TouchableOpacity onPress={() => {
        setSong(item)
        playlistRef.current.snapToIndex(0)
      }}>
        <MaterialCommunityIcons
          name="dots-vertical"
          size={25}
          color={'gray'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PlaylistsTracksCarShimmer;



