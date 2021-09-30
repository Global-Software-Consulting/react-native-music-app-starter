import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';


interface MusicProps {
    name?: string;
    model?: number;
    img?: string;
    onPressRemove?: any;
    showDel?: any;
    onPressModal?: any;
    item?: any;
    setThePlaylist?: any;
    playlistRef?: any;
    onPress?: any;
}

const PlaylistsAlbumsCard: React.FC<MusicProps> = ({
    name,
    model,
    img,
    setThePlaylist,
    item,
    playlistRef,
    onPress,
}) => {
    const styles = useStyles();

    const { t } = useTranslation();
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.taskCard} onPress={onPress}>
                    <View style={styles.imgcontainer}>
                        <Image style={styles.img} source={{ uri: img }} />
                    </View>
                </TouchableOpacity>
                <View style={styles.nameContainer}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.label}>{name}</Text>
                        <Text style={styles.model}>{model} {t("Tracks")}</Text>
                    </View>
                </View>
                <View style={{ width: '15%' }} />
                {/* {showDel && <TouchableOpacity onPress={()=> onPressRemove(name) }> */}
                <TouchableOpacity
                    onPress={() => {
                        setThePlaylist(item);
                        playlistRef.current.snapToIndex(0);
                    }}>
                    <MaterialCommunityIcons name="dots-vertical" size={25} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default PlaylistsAlbumsCard;