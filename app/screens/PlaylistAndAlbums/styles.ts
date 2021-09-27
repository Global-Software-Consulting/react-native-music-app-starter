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
            // backgroundColor:'yellow'
        },
        modalcontainer: {
            flex: 1,
            // bacskgroundColor: theme.colors.accent,
            // backgroundColor:'yellow'
        },
        icon: {
            paddingLeft: 15,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.colors.primary,
            position: 'absolute',
        },
        labelWrapper: {
            width: '10%',
            justifyContent: 'center',
            alignSelf: 'center',
        },
        ModalContainer: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            // paddingLeft: 20,
            // paddingRight: 20,

            // position:'absolute',
            // width: "50%",
            // height: "30%",
            // marginLeft:"40%",
            // marginVertical:"50%",

            // alignSelf:'flex-end',
            // backgroundColor: theme.colors.accent,
            // backgroundColor: 'blue',

            borderRadius: 10,
        },
        label: {
            marginBottom: 12,
            fontSize: hp('3%'),
            fontWeight: 'bold',
            paddingLeft: '5%',
        },
        newListLabel: {
            flexDirection: 'row',
            paddingTop: '5%',
        },
        taskCard: {
            borderRadius: 12,
            padding: 15,
            flexDirection: 'row',
            // justifyContent: 'center',
            // alignItems: 'center',
        },

        //noMusic
        errorContainer: {
            backgroundColor: theme.colors.accent,
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
        model: {
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: hp('1.75%'),
            color: theme.colors.primary,
            marginTop: -7,
        },
        folderContainer: {
            // justifyContent: 'center',
            // alignItems: 'center',
            backgroundColor: theme.colors.accent,
            marginBottom: 2,
            paddingLeft: 5,
            paddingRight: 5,
        },
        bottomModalContainer: {
            flexDirection: 'row',
            paddingLeft: 5,
            // paddingTop: '5%',
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
            marginTop: '2%',
            height: 400,
            width: '100%',
            backgroundColor: theme.colors.accent,
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

        //modalstyles
        imgcontainer: {
            margin: 5,
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
        img: {
            resizeMode: 'cover',
            height: hp('8%'), // 70% of height device screen
            width: wp('15%'), // 80% of width device screen
            borderRadius: 5,
        },
        nameContainer: {
            flexDirection: 'row',
            height: hp('7%'), // 70% of height device screen
            width: wp('40%'), // 80% of width device screen
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
        },
        textWrapper: {
            paddingLeft: 5,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            height: hp('5%'), // 70% of height device screen
            width: wp('45%'), // 80% of width device screen
        },
        bottomlabel: {
            marginBottom: 12,
            fontSize: hp('2%'),
            fontWeight: 'bold',
            // paddingLeft: '5%'
        },
        bottomTaskCard: {
            borderRadius: 12,
            margin: 15,
            flexDirection: 'row',
            borderBottomWidth: 0.25,
            shadowColor: theme.colors.primary,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            // justifyContent: 'center',
            // alignItems: 'center',
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
