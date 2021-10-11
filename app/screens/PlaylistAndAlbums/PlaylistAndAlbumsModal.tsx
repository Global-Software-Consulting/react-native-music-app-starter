import React from 'react';
import { View, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { deletePlayListFolder } from '../../store/actions/playerActions';
import { ReducerState } from '../../models/reducers';
import { PlaylistProps, MusicProps } from './types';
import {TouchableOpacity} from '@gorhom/bottom-sheet';

const PlaylistAndAlbumsModal: React.FC<MusicProps> = ({ addPlaylist, playlistRef, item }) => {
    const styles = useStyles();
    const theme = useTheme();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const playList = useSelector((state: ReducerState) => state?.playerReducer?.playList);
    const removePlaylist = () => {
        const data: any = playList?.filter((element: PlaylistProps) => element.name !== item?.name);
        dispatch(deletePlayListFolder(data));
    };

    return (
        <View style={styles.modalcontainer}>
            <View style={styles.bottomTaskCard}>
                <View style={styles.imgcontainer}>
                    <Image
                        style={styles.img}
                        source={{
                            uri: item?.songs[0]?.artwork
                                ? item?.songs[0]?.artwork
                                : `https://picsum.photos/150/200/?random=${Math.random()}`,
                        }}
                    />
                </View>

                <View style={styles.nameContainer}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.bottomlabel}>{item?.name}</Text>
                        <Text style={styles.model}>
                            {item?.songs?.length} {t('Tracks')}{' '}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ width: '15%' }} />

            <View style={styles.bottomModalContainer}>
                {/* <TouchableOpacity style={styles.newListLabel} > */}
                <View style={{ width: '5%' }} />
                <TouchableOpacity
                    onPress={() => {
                        removePlaylist();
                        playlistRef?.current.snapToIndex(1);
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <MaterialCommunityIcons
                            name="delete"
                            style={[styles.secondaryControl, addPlaylist ? styles.on : styles.off]}
                            size={30}
                            color={theme.colors.primary}
                        />
                        <Text style={styles.iconName}>{t('Remove playlist')}</Text>
                    </View>
                </TouchableOpacity>
                {/* </TouchableOpacity> */}
            </View>
        </View>
    );
};

export default PlaylistAndAlbumsModal;
