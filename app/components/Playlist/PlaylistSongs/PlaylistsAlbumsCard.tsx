import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';
import { MusicProps } from '../../player/types';
import {TouchableOpacity} from '@gorhom/bottom-sheet';

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
            <View style={styles.container}>
                <TouchableOpacity style={styles.taskCard} onPress={onPress}>
                    <View style={styles.imgcontainer}>
                        <Image style={styles.img} source={{ uri: img }} />
                    </View>
                <View style={styles.nameContainer}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.label}>{name}</Text>
                        <Text style={styles.model}>
                            {model} {t('Tracks')}
                        </Text>
                    </View>
                </View>
                </TouchableOpacity>

                <View style={{ width: '15%' }} />
                {/* {showDel && <TouchableOpacity onPress={()=> onPressRemove(name) }> */}
                <TouchableOpacity
                    onPress={() => {
                        setThePlaylist(item);
                        playlistRef.current.snapToIndex(0);
                    }}>
                    <MaterialCommunityIcons name="dots-vertical" size={25} color={'gray'} />
                </TouchableOpacity>
            </View>
    );
};

export default PlaylistsAlbumsCard;
