import React from 'react';
import { View, Image, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DownArrowIcon from 'react-native-vector-icons/AntDesign';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';

interface MusicProps {
  name?: string;
  model?: string;
  image?: string;
  url?: any;
  onPress?: any;
  isFavorite?: any;
  title?: string;
  artist?: string;
  onRemoveFavoritePress?: any;
  onFavoritePress?: any;
  onTitlePress?: any;
  onArtistPress?: any;
  onPressShuffle?: any;
  shuffleOn?: any;
  onPressRepeat?: any;
  repeatOn?: any;
  onPressPlaylist?:any
  isModalVisible?:any

}
const { width, height } = Dimensions.get('window');

const Album: React.FC<MusicProps> = ({
  url,
  title,
  artist,
  onRemoveFavoritePress,
  onFavoritePress,
  onTitlePress,
  onArtistPress,
  onPressShuffle,
  shuffleOn,
  onPressRepeat,
  repeatOn,
  isFavorite,
  onPressPlaylist,
  isModalVisible,
}) => {
  const styles = useStyles();
  const theme = useTheme();
  
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imgcontainer}>
          <Image style={styles.image} source={{ uri: url }} />
        </View>
        <View style={styles.TrackDetailcontainer}>
          <View style={styles.detailsWrapper}>
            <Text style={styles.title} onPress={onTitlePress}>
              {title}
            </Text>
            <Text style={styles.artist} onPress={onArtistPress}>
              {artist}
            </Text>
          </View>

          {!isFavorite ? (
            <TouchableOpacity
              style={styles.favoriteIcon}
              onPress={() => onFavoritePress()}>
              <Ionicons
                name="heart-outline"
                style={styles.favoriteIcon}
                size={25}
                color={theme.colors.primary}
                onPress={() => onFavoritePress()}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.favoriteIcon}
              onPress={() => onRemoveFavoritePress()}>
              <Ionicons
                name="heart"
                style={styles.favoriteIcon}
                size={25}
                color={theme.colors.primary}
                onPress={() => onRemoveFavoritePress()}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.VolumeContainer}>
        <TouchableOpacity onPress={onPressRepeat}>
            <Ionicons
              name="repeat-sharp"
              size={30}
              style={[styles.secondaryControl, repeatOn ? styles.on :  styles.off]}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={onPressShuffle}>
            <Ionicons
              name="volume-low-outline"
              style={[styles.secondaryControl, shuffleOn ? [] : styles.off]}
              size={30}
              color={theme.colors.primary}
            />
          </TouchableOpacity> */}
          <View style={{ width: '70%' }} />
         

          <TouchableOpacity onPress={onPressPlaylist}>
            <MaterialCommunityIcons
              name="playlist-plus"
              style={[styles.secondaryControl, isModalVisible ? styles.on :  styles.off]}
              size={30}
              color={theme.colors.primary}
            />
          
            {/* <MaterialCommunityIcons
              name="shuffle"
              style={[styles.secondaryControl, shuffleOn ? [] : styles.off]}
              size={28}
              color={theme.colors.primary}
            /> */}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Album;
