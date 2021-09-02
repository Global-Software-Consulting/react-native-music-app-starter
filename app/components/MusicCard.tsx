import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme, Text } from 'react-native-paper';

interface MusicProps {
  name: string,
  model: string,
  img: string,
}

const MusicCard: React.FC<MusicProps> = ({
  name,
  model,
  img,
}) => {
console.log('inininin');

  // const styles = useStyles();
  return (
    <View style={styles.container}>

      <TouchableOpacity >
        <View style={styles.imgcontainer}>
          <Image style={styles.img} source={{ uri: img }}></Image>
        </View>

      </TouchableOpacity>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>

        {/* <View style={{ flexDirection: 'row' }}>

        <Text style={styles.model}>{model}</Text>
        </View> */}


      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
        // backgroundColor:theme.colors.accent
        backgroundColor: "pink",

      },
  taskCard: {
    borderBottomWidth: 0.35,
    // borderBottomColor: Colors.Lightgray,
    backgroundColor: "red",

    padding: 10,
    // marginVertical: 5,
    flexDirection: 'row',
  },
  taskCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    //  alignItems: 'center',
  },

  model: {
    color:"yellow",
    // fontSize: TextSizes.mediumText,
    // fontFamily: 'Poppins-Regular',
  },
 
  name: {
    color: "black",
    // fontSize: TextSizes.text,
    // fontFamily: 'Poppins-Medium',
  },

  nameContainer: {
    width: 180,
    height: 90,

    marginHorizontal: '15%',
    //: 8,
    // justifyContent: 'center',
  },
  imgcontainer: {
    width: 70,
    height: 80,
    flexDirection: 'row',
    //marginHorizontal: '2%',
    //padding: 3,
    //justifyContent: 'center',
  },
  img: {
    //padding: 20,
    resizeMode: 'contain',
    width: '95%',
    height: '90%',
  },
});
// export const useStyles = () => {
//   const theme = useTheme();
//   const styles = StyleSheet.create({

//     container: {
//       padding: 15,
//       flexDirection: 'row',
//       alignItems: 'center',
//     backgroundColor:theme.colors.accent
//   },
//   labelStyle: {
//       fontSize: hp('3%'),
//       fontWeight:'bold',
//       // color: theme.colors.accent,
     
//     },
 
//     // taskCard: {
//     //   borderBottomWidth: 0.35,
//     //   backgroundColor: "red",
//     //   borderRadius: 12,
//     //   padding: 10,
//     //   flexDirection: 'row',
//     // },
  
    
  
//     // model: {
//     //   // color: Colors.Black,
//     //   justifyContent: 'center',
//     //   textAlign: 'center',
//     //   // fontSize: hp('2%'),
//     // },
//     // name: {
//     //   // fontSize: hp('3%'),
//     //   fontWeight: 'bold',
//     // },
//     // nameContainer: {
//     //   width: 180,
//     //   height: 90,
//     //   marginHorizontal: '15%',
//     // },
//     // imgcontainer: {
//     //   width: 100,
//     //   height: 100,
//     //   flexDirection: 'row',
//     //   backgroundColor: "blue"
//     // },
//     // img: {
//     //   //padding: 20,
//     //   // resizeMode: 'contain',
//     //   width: '100%',
//     //   height: '100%',
//     // },
//   });
//   return styles;
// }
export default MusicCard;



