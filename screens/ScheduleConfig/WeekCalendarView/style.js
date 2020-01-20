import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  Theme 
} from '../../../constants'

export const scrollViewStyle = StyleSheet.create({
  container: {
    //...StyleSheet.absoluteFillObject,
    flex: 1,
    width: Dimensions.get('window').width - 10,
    flexDirection: 'column',
    marginBottom: 5
    //backgroundColor: 'pink',
  },
  contentContainer: {
    //flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  }
})

export const addBtnStyle = StyleSheet.create({
  container: {
    //alignSelf: 'flex-end',
    //marginBottom: 5,
    // marginTop: 5
    position: "absolute",
    right: 15,
    bottom: 15,
    padding: 2
  },
  text: {
    color: Theme.COLORS.WHITE,
    fontSize: 20
  }
})