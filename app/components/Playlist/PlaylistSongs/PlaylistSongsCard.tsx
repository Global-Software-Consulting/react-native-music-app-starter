import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface MusicProps {
  name?: string,
  model?: string,
  img?: string,
  onPressRemove?: any,
  showDel?: any,
  addSongToPlaylist?: any,
}

const PlaylistSongsCard: React.FC<MusicProps> = ({
  name,
  model,
  img,
  showDel,
  onPressRemove,
  addSongToPlaylist
}) => {
  const styles = useStyles();
  
  // const styles = useStyles();
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.taskCard} onPress={() => addSongToPlaylist}>
        <View style={styles.imgcontainer}>
          <Image style={styles.img} source={{ uri: img }}></Image>
        </View>

      </TouchableOpacity>
      <View style={styles.nameContainer}>
        <View style={styles.textWrapper}>
          <Text style={styles.label}>{name}</Text>
          <Text style={styles.model}>{model} tracks</Text>
        </View>

      </View>
      {/* {showDel && <TouchableOpacity onPress={()=> onPressRemove(name) }> */}
      <TouchableOpacity onPress={()=> onPressRemove(name) }>
        <MaterialCommunityIcons
          name="delete-outline"
          size={25}

        />
      </TouchableOpacity>
    </View>
  );
};

export default PlaylistSongsCard;



