import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from '../PlaylistSongs/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MusicProps } from '../../player/types';

const PlaylistsTracksCarShimmer: React.FC<MusicProps> = ({ setSong, item, playlistRef }) => {
    const styles = useStyles();
    return (
        <View style={styles.trackShimmercontainer}>
            <TouchableOpacity style={styles.ShimmertaskCard}>
                <View style={styles.Shimmerimgcontainer}>
                    <Image style={styles.Shimmerimg} source={{}} />
                </View>
            </TouchableOpacity>
            <View style={styles.ShimmernameContainer}>
                <View style={styles.ShimmertextWrapper}>
                    <Text style={styles.Shimmerlabel} />
                    <Text style={styles.Shimmermodel} />
                </View>
            </View>
            <View style={{ width: '15%' }} />
            <TouchableOpacity
                onPress={() => {
                    setSong(item);
                    playlistRef.current.snapToIndex(0);
                }}>
                <MaterialCommunityIcons name="dots-vertical" size={25} color={'gray'} />
            </TouchableOpacity>
        </View>
    );
};

export default PlaylistsTracksCarShimmer;
