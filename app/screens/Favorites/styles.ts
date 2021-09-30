import { StyleSheet } from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useTheme } from 'react-native-paper';

export const useStyles = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.accent,
            // backgroundColor:'red'
        },
        Musiccontainer: {
            backgroundColor: theme.colors.accent,
        },

        model: {
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: hp('2%'),
            color: 'darkgray',
        },
        icon: {
            // paddingLeft: 10,
            // alignSelf: 'center',
            // justifyContent: 'center',
            // alignItems: 'center',
            color: theme.colors.primary,
            // position: 'absolute',
        },
        favIcon: {
            paddingLeft: wp('5%'),
            paddingTop: hp('21.5%'),
            alignSelf: 'flex-start',
            color: 'red',
            position: 'absolute',
        },
    });
    return styles;
};
export default useStyles;
