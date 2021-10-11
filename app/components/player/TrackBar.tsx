import React from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useTheme, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useStyles from './styles';
import Slider from 'react-native-slider';
import { TrackMusicProps } from './types';

function pad(n: any, width: any, z: any = 0) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position: any) => [
    pad(Math.floor(position / 60), 2),
    pad(position % 60, 2),
];


const TrackBar: React.FC<TrackMusicProps> = ({
    trackLength,
    currentPosition,
    onSeek,
    onBack,
    onForward,
    forwardDisabled,
    playbackState,
    togglePlayback,
}) => {
    const theme = useTheme();
    const styles = useStyles();
    const elapsed = minutesAndSeconds(currentPosition);
    const remaining = minutesAndSeconds(trackLength - currentPosition);
    // console.log("currentposition",currentPosition);
    return (
        <>
            <View style={styles.Trackcontainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>{elapsed[0] + ':' + elapsed[1]}</Text>
                    <View style={{ flex: 1 }} />
                    <Text style={[styles.text, { width: 40 }]}>
                        {trackLength > 1 && remaining[0] + ':' + remaining[1]}
                    </Text>
                </View>
                <Slider
                    maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
                    onSlidingComplete={onSeek}
                    minimumValue={0}
                    value={currentPosition}
                    style={styles.slider}
                    minimumTrackTintColor={'orange'}
                    maximumTrackTintColor={theme.colors.background}
                    thumbStyle={styles.thumb}
                    trackStyle={styles.track}
                />
                <View style={styles.Controlcontainer}>
                    <View style={{ width: 5 }} />
                    <TouchableOpacity onPress={() => onBack()}
                        disabled={forwardDisabled}
                        style={styles.controlButton}>
                        <Ionicons
                            name="play-skip-back-outline"
                            size={30}
                            color={theme.colors.primary}
                            onPress={() => onBack()}
                            style={styles.controlIcon}
                        />
                    </TouchableOpacity>
                    <View style={{ width: 20 }} />
                    {playbackState === 'loading' ? (
                        <ActivityIndicator
                            size="large"
                            color="black"
                            style={styles.activityIndicator}
                        />
                    ) : playbackState === 'paused' || playbackState === 2 ? (
                        <TouchableOpacity
                            onPress={() => togglePlayback(playbackState)}
                            style={styles.playButton}>
                            <Ionicons name="play" size={35} color={theme.colors.primary} style={styles.playerIcon} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            onPress={() => togglePlayback(playbackState)}
                            style={styles.playButton}>
                            <Ionicons name="pause" size={35} color={theme.colors.primary} style={styles.playerIcon} />
                        </TouchableOpacity>
                    )}

                    <View style={{ width: 20 }} />
                    <TouchableOpacity
                        onPress={() => onForward()}
                        disabled={forwardDisabled}
                        style={styles.controlButton}>
                        <Ionicons
                            name="play-skip-forward-outline"
                            size={30}
                            // style={[forwardDisabled && { opacity: 0.3 }]}
                            color={theme.colors.primary}
                            onPress={() => onForward()}
                            style={styles.controlIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default TrackBar;
