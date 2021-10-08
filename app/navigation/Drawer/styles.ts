import { StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 12,
        marginBottom: 12,
    },
    headerLabel: {
        flex: 1,
        textAlign: 'center',
        fontSize: hp('2.75%'),
        fontWeight: 'bold',
        paddingRight: '5%',
        textAlignVertical: 'center'
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
    },
    text: {
        marginTop: 2,
        fontWeight: 'bold',
    },
    labelWrapper: {
        justifyContent: 'center',
        alignSelf: 'center',

    },
    chekboxtext: {
        fontWeight: 'bold',
        margin: 8,
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    col: {
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    button: {
        backgroundColor: '#f8f8ff',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        flexDirection: 'row',
    },
    listbutton: {
        // backgroundColor: useTheme().colors.accent,
        padding: 5,
        borderRadius: 10,
        margin: 2,
        flexDirection: 'row',
    },
    icon: {
        paddingLeft: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'gray',
    },
});

export default styles;
