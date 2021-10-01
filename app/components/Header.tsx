import React from 'react';
import { View, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme, Text } from 'react-native-paper';
import { TitleProps } from './player/types';

const Header: React.FC<TitleProps> = (props): JSX.Element => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.label}>{props.title}</Text>
            </View>
        </View>
    );
};

export const useStyles = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            padding: 15,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.colors.accent,
        },
        label: {
            fontSize: hp('3%'),
            fontWeight: 'bold',
            // color: theme.colors.accent,
        },
    });
    return styles;
};
export default Header;
