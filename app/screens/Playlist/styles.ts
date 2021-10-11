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
            marginBottom:'15%'
        },
        shimmerContainer: {
            flex: 1,
            backgroundColor: theme.colors.background,
        },
        playlistContainer: {
            flex: 1,
            margin: '5%',
            justifyContent: 'center',
            backgroundColor: theme.colors.accent,
            // backgroundColor:'red'
            
        },
        shimmerPlaylistContainer: {
            flex: 1,
            padding: '5%',
            backgroundColor: theme.colors.background,
            // backgroundColor:'red'
        },
        noPlaylistContainer: {
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.accent,
            // backgroundColor:'red'
        },
        Musiccontainer: {
            backgroundColor: theme.colors.accent,
        },
        shimmerMusiccontainer: {
            backgroundColor: theme.colors.background,
        },
        noPlaylistText: {
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: hp('2.75%'),
            fontWeight: 'bold',
            color: theme.colors.primary,
            marginBottom: 10,
        },
        model: {
            paddingLeft: '8%',
            fontSize: hp('2%'),
            color: 'darkgray',
            // textAlign: 'center',
        },
        shimmerModel: {
            paddingLeft: '8%',
            fontSize: hp('2%'),
            color: 'darkgray',
            backgroundColor: theme.colors.background,
            // textAlign: 'center',
        },
        icon: {
            color: theme.colors.primary,
        },
        favIcon: {
            paddingLeft: wp('5%'),
            paddingTop: hp('21.5%'),
            alignSelf: 'flex-start',
            color: 'red',
            position: 'absolute',
        },
        label: {
            flex: 1,
            textAlign: 'center',
            fontSize: hp('2.5%'),
            fontWeight: 'bold',
            color:theme.colors.primary,
            textAlignVertical: 'center'

        },
        labelWrapper: {
            justifyContent: 'center',
            alignSelf: 'center',
        },
        labelNameWrapper: {
            // backgroundColor:'blue',
            // marginLeft: '2%',
            width: wp('90%'),
            marginTop: hp('2%'),
           
        },
        shimmerLabelNameWrapper: {
            // marginLeft: '2%',
            width: wp('90%'),
            marginTop: hp('2%'),
            shadowColor: theme.colors.accent,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            backgroundColor: theme.colors.background,
        },
        labelPlaylist: {
            paddingLeft: '8%',
            fontSize: hp('3%'),
            fontWeight: 'bold',
            color: theme.colors.primary,
            // backgroundColor: theme.colors.primary,
        },
        shimmerLabelPlaylist: {
            paddingLeft: '8%',
            fontSize: hp('3%'),
            fontWeight: 'bold',
            color: theme.colors.primary,
            backgroundColor: theme.colors.background,
            // backgroundColor: theme.colors.primary,
        },
        noMusicIcon: {
            // paddingLeft:15,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.colors.background,
        },
        backgroundImage: {
            flex: 1,
            resizeMode: 'cover',
            backgroundColor:theme.colors.background,

        },
        shimmerBackgroundImage: {
            flex: 1,
            resizeMode: 'cover',
            backgroundColor: theme.colors.background,
        },
        //bottomSheet
        bottomlabel: {
            marginBottom: 12,
            fontSize: hp('2%'),
            fontWeight: 'bold',
            // color: theme.colors.primary,
            // paddingLeft: '5%'
        },
        bottomTaskCard: {
            borderRadius: 12,
            margin: 15,
            flexDirection: 'row',
            borderBottomWidth: 0.25,
        },
        modalcontainer: {
            flex: 1,
        },
        imgcontainer: {
            justifyContent: 'center',
            padding: 5,
            margin: 5,
            height: hp('10%'), // 70% of height device screen
            width: wp('20%'),
            flexDirection: 'row',
            borderRadius: 10,
            shadowColor: theme.colors.primary,
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.1,
            shadowRadius: 0.2,

            elevation: 0.1,
        },
        img: {
            resizeMode: 'cover',
            height: hp('8%'), // 70% of height device screen
            width: wp('15%'), // 80% of width device screen
            borderRadius: 5,
            backgroundColor:theme.colors.background,

        },
        nameContainer: {
            paddingTop: 10,
            flexDirection: 'row',
            height: hp('7%'), // 70% of height device screen
            width: wp('40%'), // 80% of width device screen
        },
        textWrapper: {
            paddingLeft: 5,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            height: hp('5%'), // 70% of height device screen
            width: wp('45%'), // 80% of width device screen
        },
        bottomModalContainer: {
            flexDirection: 'row',
            paddingLeft: 5,
        },
        name: {
            paddingTop: '1%',
            fontSize: hp('2%'),
            fontWeight: 'bold',
            color: theme.colors.background,
            // paddingLeft: '5%'
        },
        iconName: {
            paddingTop: '1%',
            fontSize: hp('2%'),
            fontWeight: 'bold',
            color: theme.colors.primary,
            // paddingLeft: '5%'
        },
        modal: {
            marginTop: '1.5%',
            height: 400,
            width: '100%',
            backgroundColor: theme.colors.accent,
            // backgroundColor:'red',
        },
        secondaryControl: {
            height: hp('7%'), // 70% of height device screen
            width: wp('10%'),
            // color:'orange',
        },
        off: {
            opacity: 0.3,
            color: theme.colors.primary,
        },
        on: {
            color: 'orange',
        },
        artist: {
            fontSize: hp('2%'),
            color: theme.colors.background,
            // textAlign: 'center',
        },

        contentContainer: {
            ...StyleSheet.absoluteFillObject,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: theme.colors.primary,
        },

        closeLineContainer: {
            alignSelf: 'center',
        },
        closeLine: {
            width: 40,
            height: 6,
            borderRadius: 3,
            backgroundColor: theme.colors.accent,
            marginTop: 2,
        },
    });
    return styles;
};
export default useStyles;
