import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MusicProps } from '../../player/types';

const PlaylistSongsCard: React.FC<MusicProps> = ({
    name,
    model,
    img,
    onPressRemove,
    addSongToPlaylist,
}) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.taskCard} onPress={() => addSongToPlaylist}>
                <View style={styles.imgcontainer}>
                    <Image style={styles.img} source={{ uri: img }} />
                </View>
            </TouchableOpacity>
            <View style={styles.nameContainer}>
                <View style={styles.textWrapper}>
                    <Text style={styles.label}>{name}</Text>
                    <Text style={styles.model}>{model} tracks</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => onPressRemove(name)}>
                <MaterialCommunityIcons name="delete-outline" size={25} />
            </TouchableOpacity>
        </View>
    );
};

export default PlaylistSongsCard;
