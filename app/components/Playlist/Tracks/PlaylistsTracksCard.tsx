import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from '../PlaylistSongs/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface MusicProps {
    name?: string;
    model?: string;
    img?: string;
    item?: any;
    setSong?: any;
    playlistRef?: any;
    onPress?: any;
}

const PlaylistsTracksCard: React.FC<MusicProps> = ({
    name,
    model,
    img,
    setSong,
    item,
    playlistRef,
    onPress,
}) => {
    const styles = useStyles();
    return (
        <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row' }}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.taskCard}>
                    <View style={styles.imgcontainer}>
                        <Image style={styles.img} source={{ uri: img }} />
                    </View>
                </TouchableOpacity>
                <View style={styles.nameContainer}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.label}>{name}</Text>
                        <Text style={styles.model}>{model} </Text>
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
        </TouchableOpacity>
    );
};

export default PlaylistsTracksCard;
