import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme } from 'react-native-paper';

export const useStyles = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.accent,
            paddingBottom: '15%',
        },
        label: {
            marginBottom: 12,
            fontSize: hp('2.5%'),
            fontWeight: 'bold',
        },
        model: {
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: hp('2%'),
            color: 'darkgray',
        },
        noMusicIcon: {
            // paddingLeft:15,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.colors.background,
        },
        noPlaylistContainer: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: theme.colors.accent,
            // backgroundColor:'red'
        },
        noPlaylistText: {
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: hp('2.75%'),
            fontWeight: 'bold',
            color: theme.colors.primary,
            marginBottom: 10,
        },
    });
    return styles;
};
export default useStyles;
