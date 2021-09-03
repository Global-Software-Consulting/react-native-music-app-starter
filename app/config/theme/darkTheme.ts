import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme
  } from 'react-native-paper';
  
   const darkTheme = {
    ...PaperDarkTheme,
    colors: {
      ...PaperDarkTheme.colors,
      primary: 'white',
      accent: 'black',
      background:'gray',
    },
  };
  
  
  export default darkTheme