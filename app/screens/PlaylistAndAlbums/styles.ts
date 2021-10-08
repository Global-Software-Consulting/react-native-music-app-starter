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
        },
        modalcontainer: {
            flex: 1,
        },
        icon: {
            color: theme.colors.primary,
        },
        labelWrapper: {
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

            borderRadius: 10,
        },
        label: {
            textAlignVertical: 'center',
            flex: 1,
            textAlign: 'center',
            fontSize: hp('2.5%'),
            fontWeight: 'bold',
            paddingRight: '5%',
            color:theme.colors.primary

        },
        newListLabel: {
            flexDirection: 'row',
            paddingTop: '2%',
        },
        taskCard: {
            borderRadius: 12,
            padding: 15,
            flexDirection: 'row',
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
            backgroundColor: theme.colors.accent,
            marginBottom: 2,
            paddingLeft: 5,
            paddingRight: 5,
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
        },
        iconName: {
            paddingTop: '1%',
            fontSize: hp('2%'),
            fontWeight: 'bold',
            color: theme.colors.primary,
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
            // margin:'5%',
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
            padding: 7,
            justifyContent: 'center',
            margin: 5,
            height: hp('10%'), // 70% of height device screen
            width: wp('20%'),
            flexDirection: 'row',
            borderRadius: 10,

        },
        img: {
            resizeMode: 'cover',
            height: hp('8%'), // 70% of height device screen
            width: wp('15%'), // 80% of width device screen
            borderRadius: 5,
            backgroundColor:theme.colors.background,
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
        },
        bottomTaskCard: {
            borderRadius: 12,
            margin: 15,
            flexDirection: 'row',
            borderBottomWidth: 0.25,
           
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
