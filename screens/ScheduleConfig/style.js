import {
  StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({

  container: {
    //width: () => Dimensions.get('screen').width,
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    //marginLeft: 5,
    //marginRight: 5,
    paddingLeft: 5,
    paddingRight: 5,
    //backgroundColor: "lightblue"
  },
  scheduleType: {
    // flex: 1
    //alignSelf: 'flex-start',
    fontSize: 12,
    //marginTop: 10,
    //marginLeft: 20,
  }
});