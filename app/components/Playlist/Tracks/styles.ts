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
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.accent,
            marginBottom: 10,
        },
        trackShimmercontainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.background,
            marginBottom: 10,
        },

        label: {
            marginBottom: 12,
            fontSize: hp('2.5%'),
            fontWeight: 'bold',
        },
        Shimmerlabel: {
            height: hp('1%'), // 70% of height device screen
            width: wp('30%'),
            marginBottom: 12,
            fontSize: hp('2.5%'),
            fontWeight: 'bold',
            backgroundColor: theme.colors.background,
        },

        taskCard: {
            borderRadius: 12,
            paddingLeft: 5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        ShimmertaskCard: {
            borderRadius: 12,
            paddingLeft: 5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.background,
        },

        model: {
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: hp('1.75%'),
            color: theme.colors.background,
            marginTop: -7,
        },
        Shimmermodel: {
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: hp('1.75%'),
            color: 'darkgray',
            marginTop: -7,
            backgroundColor: theme.colors.background,
            height: hp('0.5%'), // 70% of height device screen
            width: wp('20%'),
            borderRadius: 10,
        },
        name: {
            fontSize: hp('2%'),
            fontWeight: 'bold',
        },
        Shimmername: {
            width: wp('45%'),
            fontSize: hp('2%'),
            fontWeight: 'bold',
            backgroundColor: theme.colors.background,
        },
        textWrapper: {
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            height: hp('5%'), // 70% of height device screen
            width: wp('45%'), // 80% of width device screen
        },
        ShimmertextWrapper: {
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            height: hp('5%'), // 70% of height device screen
            width: wp('45%'), // 80% of width device screen
        },
        nameContainer: {
            flexDirection: 'row',
            height: hp('7%'), // 70% of height device screen
            width: wp('50%'), // 80% of width device screen
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
        },
        ShimmernameContainer: {
            flexDirection: 'row',
            height: hp('7%'), // 70% of height device screen
            width: wp('50%'), // 80% of width device screen
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            // backgroundColor: theme.colors.background,
        },
        imgcontainer: {
            height: hp('10%'), // 70% of height device screen
            width: wp('20%'),
            flexDirection: 'row',
            borderRadius: 10,
            shadowColor: 'blue',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 20,
        },
        Shimmerimgcontainer: {
            height: hp('10%'), // 70% of height device screen
            width: wp('20%'),
            flexDirection: 'row',
            borderRadius: 10,
            shadowColor: 'blue',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 20,
            backgroundColor: theme.colors.background,
        },
        img: {
            resizeMode: 'cover',
            height: hp('10%'), // 70% of height device screen
            width: wp('20%'), // 80% of width device screen
            borderRadius: 5,
            backgroundColor: theme.colors.primary,

        },
        Shimmerimg: {
            resizeMode: 'cover',
            height: hp('10%'), // 70% of height device screen
            width: wp('20%'), // 80% of width device screen
            borderRadius: 5,
            backgroundColor: theme.colors.background,
        },
    });
    return styles;
};
export default useStyles;
