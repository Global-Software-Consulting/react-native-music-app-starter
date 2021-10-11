import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from './styles';

interface MusicProps {
    name?: string;
    model?: string;
    img?: string;
    onPress?: any;
}

const PlaylistCard: React.FC<MusicProps> = ({ name, img, onPress }) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.taskCard} onPress={onPress}>
                <View style={styles.imgcontainer}>
                    <Image style={styles.img} source={{ uri: img }} />
                </View>
            </TouchableOpacity>
            <View style={styles.nameContainer}>
                <View style={styles.textWrapper}>
                    <Text style={styles.label}>{name}</Text>
                </View>
            </View>
        </View>
    );
};

export default PlaylistCard;
