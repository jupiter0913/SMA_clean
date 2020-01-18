// @flow
import { StyleSheet } from 'react-native'

const calendarHeight = 2400
// const eventPaddingLeft = 4
const leftMargin = 50 - 1

export default function styleConstructor(
  theme = {}
) {
  let style = {
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      ...theme.container
    },
    contentStyle: {
      backgroundColor: '#ffff',
      height: calendarHeight + 10
    },
    header: {
      paddingHorizontal: 30,
      height: 50,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#E6E8F0',
      backgroundColor: '#F5F5F6',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      ...theme.header
    },
    headerText: {
      fontSize: 16
    },
    arrow: {
      width: 15,
      height: 15,
      resizeMode: 'contain'
    },
    event: {
      position: 'absolute',
      backgroundColor: '#CCC',
      opacity: 1,
      borderColor: '#999',
      borderWidth: 3,
      borderRadius: 5,
      minHeight: 25,
      flex: 1,
      padding: 5,
      alignItems: 'flex-start',
      overflow: 'hidden',
      flexDirection: 'row',
      ...theme.event
    },
    eventSort: {
      width: 20,
      height: '100%',
      justifyContent: 'center',
      backgroundColor: '#505050',
      alignItems:'center'
    },
    eventTitle: {
      color: '#505050',
      fontWeight: '600',
      minHeight: 15,
      paddingLeft: 5,
      ...theme.eventTitle
    },
    eventSummary: {
      color: '#505050',
      fontSize: 12,
      flexWrap: 'wrap',
      paddingLeft: 5,
      ...theme.eventSummary
    },
    eventTimes: {
      marginTop: 3,
      fontSize: 10,
      fontWeight: 'bold',
      color: '#615B73',
      flexWrap: 'wrap',
      paddingLeft: 5,
      ...theme.eventTimes
    },
    eventCloseButtonView: {
      height: '100%',
      minWidth: 35,
      justifyContent: 'center'
    },
    eventCloseButton: {
      width: 30,
      height: 30,
      borderRadius: 30,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#505050',
    },
    line: {
      height: 1,
      position: 'absolute',
      left: leftMargin,
      backgroundColor: 'rgb(216,216,216)',
      ...theme.line
    },
    lineNow: {
      height: 1,
      position: 'absolute',
      left: leftMargin,
      backgroundColor: 'red',
      ...theme.line
    },

    addBtnStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#d4d4d4',
      width: '100%'
    },
    BtnUnselectedText: {
      fontSize: 24,
      textAlign: "center",
      color: '#000'
    },
    BtnSelectedText: {
      fontSize: 24,
      textAlign: "center",
      color: '#fff'
    },

    timeLabel: {
      position: 'absolute',
      left: 15,
      color: 'rgb(170,170,170)',
      fontSize: 10,
      fontFamily: 'space-mono',
      fontWeight: '500',
      ...theme.timeLabel
    },
    textStyle: {
      color: 'white',
      fontSize: 20
    }
  }
  return StyleSheet.create(style)
}
