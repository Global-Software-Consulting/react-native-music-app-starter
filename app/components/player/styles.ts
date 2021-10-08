import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useTheme } from 'react-native-paper';

export const useStyles = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        // Index styles
        Indexcontainer: {
            justifyContent: 'center',
            height: hp('100%'),
            flexDirection: 'row',
            backgroundColor: 'white',
        },
        ModalContainer: {
            // paddingLeft: 20,
            // paddingRight: 20,
            width: '100%',
            height: '70%',
            alignSelf: 'center',
            backgroundColor: theme.colors.accent,
            borderRadius: 10,
        },
        CreateModalContainer: {
            width: '90%',
            height: '50%',
            alignSelf: 'center',
            backgroundColor: theme.colors.accent,
            borderRadius: 10,
        },
        safeAreaView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        container: {
            justifyContent: 'center',
            alignItems: 'center',

            backgroundColor: theme.colors.accent,
            paddingLeft: 24,
            paddingRight: 24,
        },
        folderContainer: {
            // justifyContent: 'center',
            // alignItems: 'center',
            // marginBottom:hp('8%'),
            backgroundColor: theme.colors.accent,
            paddingLeft: 5,
            paddingRight: 5,
        },
        TrackDetailcontainer: {
            flexDirection: 'row',
            paddingLeft: 20,
            alignItems: 'center',
            paddingRight: 20,
            // backgroundColor: "red",
        },
        VolumeContainer: {
            paddingLeft: 25,
            height: hp('8%'), // 70% of height device screen
            width: wp('90%'),
            paddingTop: 5,
            flexDirection: 'row',
            alignItems: 'center',
        },

        label: {
            marginBottom: 12,
            fontSize: hp('2.5%'),
            fontWeight: 'bold',
            paddingLeft: '5%',
        },
        newListLabel: {
            flexDirection: 'row',
            paddingTop: '5%',
        },
        taskCard: {
            borderRadius: 12,
            paddingLeft: 5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            height: hp('45%'), // 70% of height device screen
            width: wp('80%'),
            borderRadius: 10,
            backgroundColor: theme.colors.background,

        },

        model: {
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: hp('1.75%'),
            color: 'darkgray',
            marginTop: -7,
        },
        name: {
            fontSize: hp('2%'),
            fontWeight: 'bold',
            paddingLeft: '5%',
        },
        textWrapper: {
            justifyContent: 'center',
            alignItems: 'center',
            height: hp('5%'), // 70% of height device screen
            width: wp('45%'), // 80% of width device screen
        },
        nameContainer: {
            height: hp('7%'), // 70% of height device screen
            width: wp('50%'), // 80% of width device screen
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
        },
        imgcontainer: {
            marginTop: 5,
            height: hp('47%'), // 7F0% of height device screen
            width: wp('80%'),
            justifyContent: 'center',
            borderRadius: 10,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 20,
            // backgroundColor: theme.colors.accent,
        },
        img: {
            resizeMode: 'cover',
            height: hp('26%'), // 70% of height device screen
            width: wp('43%'), // 80% of width device screen
            borderRadius: 10,
            backgroundColor: theme.colors.background,

        },
        detailsWrapper: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            paddingLeft: 25,
        },
        title: {
            fontSize: hp('3%'),
            fontWeight: 'bold',
            textAlign: 'center',
        },
        artist: {
            fontSize: hp('2%'),
            marginTop: 4,
        },
        button: {
            opacity: 0.72,
        },
        favoriteIcon: {
            opacity: 0.72,
            borderRadius: 10,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
        },
        // <-------------------------Track Bar styles--------------->

        slider: {
            marginTop: -12,
            width: wp('80%'),
        },
        Trackcontainer: {
            paddingLeft: 16,
            paddingRight: 16,
            marginBottom: '15%',

            // marginBottom:30,
            // paddingTop: 5,
            // backgroundColor:'red'
        },
        track: {
            height: 3.5,
            borderRadius: 1,
        },
        thumb: {
            height: hp('2.2%'), // 70% of height device screen
            width: wp('4.5%'),
            borderRadius: 10,
        },
        text: {
            fontSize: 12,
            textAlign: 'center',
            marginBottom: 5,
        },
        // <-------------------------Control Bar styles--------------->
        Controlcontainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        playButton: {
            height: hp('11%'), // 70% of height device screen
            width: wp('20%'),
            borderRadius:hp('11%')/ 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'orange',
            // padding: 10,
            // paddingHorizontal:"5.5%",
            shadowColor: theme.colors.primary,
            shadowOffset: {
                width: 0,
                height: 7,
            },

            shadowOpacity: 0.41,
            shadowRadius: 9.11,

            elevation: 14,
        },

        controlButton: {
            justifyContent: 'center',
            backgroundColor: 'lightgray',
            alignSelf: 'center',
            height: hp('5%'), // 70% of height device screen
            width: wp('10%'),
            borderRadius: hp('15%') / 2,
            // paddingLeft: 5,
            shadowColor: theme.colors.primary,
            shadowOffset: {
                width: 0,
                height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,

            elevation: 14,
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
        activityIndicator: {
            justifyContent: 'center',
            backgroundColor: 'lightgray',
            height: hp('11%'), // 70% of height device screen
            width: wp('20%'),
            borderRadius:hp('11%')/ 2,
            alignItems: 'center',
            paddingLeft: 5,
            shadowColor: theme.colors.primary,
            shadowOffset: {
                width: 0,
                height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,

            elevation: 14,
        },

        Musiccontainer: {
            backgroundColor: theme.colors.accent,
        },

        icon: {
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.colors.primary,
        },
        playerIcon: {
            paddingLeft:"5%",
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        },
        controlIcon: {
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        },
        Dropicon: {
            marginLeft: wp('25%'),
            justifyContent: 'center',
        },

        audioElement: {
            height: 0,
            width: 0,
        },
        line: {
            width: wp('15%'),
            justifyContent: 'center',
            marginLeft: wp('35%'),
            marginBottom: 25,
            borderBottomColor: theme.colors.primary,
            borderBottomWidth: 3.5,
            // borderRadius:3
            // marginRight:44,
        },
        wrapHeader: {
            backgroundColor: 'red',
            justifyContent: 'center',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 30,
        },
        saveButtonText: {
            paddingTop: '5%',
            height: hp('3%'),
            fontWeight: 'bold',
            color: theme.colors.accent,
        },
        saveButton: {
            padding: 5,
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            width: wp('12%'),
            height: hp('3%'),
            borderRadius: 5,
            borderStartColor: 'red',
        },
        inputWrapper: {
            padding: 12,
            justifyContent: 'space-between',
        },
        input: {
            height: 40,
            borderColor: theme.colors.primary,
            borderBottomWidth: 1,
            color: theme.colors.primary,
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
        noMusicIcon: {
            // paddingLeft:15,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.colors.background,
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
