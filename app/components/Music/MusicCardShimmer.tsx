import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from './styles';

interface MusicProps {
    name?: string;
    model?: string;
    img?: string;
}

const MusicCardShimmer: React.FC<MusicProps> = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
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
        </View>
    );
};

export default MusicCardShimmer;
