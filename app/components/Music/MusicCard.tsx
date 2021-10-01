import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from './styles';

interface MusicProps {
    name?: string;
    model?: string;
    img?: string;
    onPress(): void;
}

const MusicCard: React.FC<MusicProps> = ({ name, model, img, onPress }) => {
    const styles = useStyles();
    // const styles = useStyles();
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
                    <Text style={styles.model}>{model}</Text>
                </View>
            </View>
        </View>
    );
};

export default MusicCard;
