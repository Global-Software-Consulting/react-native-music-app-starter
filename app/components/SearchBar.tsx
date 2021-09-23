import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { IPlayerState } from '../models/reducers/player';
import PlaylistSongsCard from '../components/Playlist/PlaylistSongs/PlaylistSongsCard'
interface TitleProps {
  // title: string,
  setUpdatedPlaylist?: any;
  placeholder?: any;
  Playlist?: any;
}
interface IPState {
  playerReducer: IPlayerState;

}
const SearchBar: React.FC<TitleProps> = (props): JSX.Element => {
  const styles = useStyles();
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState(false);
  const theme = useTheme();
  const playList = useSelector((state: IPState) => state.playerReducer.playList);

  const onChangeText = (query: string) => {
    setQuery(query)
    const list = playList?.filter((val:any) => {
      return val.name.toLowerCase().includes(query.toLowerCase());
    });
    props.setUpdatedPlaylist(list);
  }
  return (

    <View style={styles.container}>
      <View style={styles.container2}>
        <Icon name={'search'} size={20} color={theme.colors.primary} />
      </View>

      {props.onFocus ? (
        <TouchableOpacity
          onPress={props.onFocus}
          style={{ flex: 4, justifyContent: 'center', padding: 5 }}>
          <Text style={styles.txt}>{props.placeholder}</Text>
        </TouchableOpacity>
      ) : (
        <View style={{ flex: 4, justifyContent: 'center' }}>
          <TextInput
            style={styles.txt}
            value={query}
            onChangeText={text => {
              onChangeText(text)
            }}
            placeholder={props.placeholder}
          />
        </View>
      )}
      
    </View>

    

  )
};

export const useStyles = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({

    container: {
      height: hp('5%'),
      width: wp('85%'),
      flexDirection: 'row',
      paddingRight: 5,
      marginLeft: 15,
      borderRadius: 10,
      backgroundColor: theme.colors.background,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    label: {
      fontSize: hp('3%'),
      fontWeight: 'bold',
      // color: theme.colors.accent,

    },

    container2: {
      backgroundColor: theme.colors.background,
      borderRadius: 10,
      justifyContent: 'center',
      padding: 10,
     
    },
    txt: {
      padding: 5,
      color: theme.colors.primary,
      fontSize: hp('2%'),
    },
    Searchtxt: {
      padding: 5,
      color: theme.colors.background,
      fontSize: hp('2%'),
    },
  });
  return styles;
}
export default SearchBar;