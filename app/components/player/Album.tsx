import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';

interface MusicProps {
  name?: string,
  model?: string,
  image?: string,
  url?: any,
  onPress?: any,
  title?: string,
  artist?: string,
  onFavoritePress?: any,
  onTitlePress?: any,
  onArtistPress?: any,
}
const { width, height } = Dimensions.get('window');

const Album: React.FC<MusicProps> = ({
  name,
  model,
  image,
  url,
  onPress,
  title,
  artist,
  onFavoritePress,
  onTitlePress,
  onArtistPress,
}) => {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.imgcontainer}>
          <Image
            style={styles.image}
            source={{ uri: url }}
          />
          </View>
        </TouchableOpacity>
        <View style={styles.TrackDetailcontainer}>
        <View style={styles.detailsWrapper}>
          <Text style={styles.title} onPress={onTitlePress}>{title}</Text>
          <Text style={styles.artist} onPress={onArtistPress}>{artist}</Text>
        </View>
        <TouchableOpacity onPress={onFavoritePress}>
          <View style={styles.favoriteIcon}>
            <Ionicons
              name="heart-outline"
              style={styles.favoriteIcon}
              size={30}
              color={theme.colors.primary}
              onPress={onFavoritePress}
            />
          </View>
        </TouchableOpacity>
      </View>
      </View>
      
    </>
  );
};

export default Album;



