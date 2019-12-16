import {
    StyleSheet,
} from 'react-native';

import {
    Theme
} from '../../constants'

export const btnGroupStyle = StyleSheet.create({
    container: {
      //flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginBottom: 5
    },
    text: {
      fontSize: 12,
      marginBottom: 5
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch'
    },
    button: {
      flex: 1
    }
  });