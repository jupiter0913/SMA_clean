import {
    StyleSheet
} from 'react-native';

import {
    Theme
} from '../../constants'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    addBtnStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#555',
        width: '100%'
    },
    Btntext: {
        fontSize: 20,
        textAlign: "center",
        color: '#fff'
    },

    modalTimePicker: {
        justifyContent: 'center',
        flexDirection:'row'
    },

    modal: {
        // alignItems: 'center',
        backgroundColor: "#c9c9c9",
        height: 500,
        width: 380,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',

    },
    modalBtn: {
        position: 'absolute',
        margin: 16,
        width:350,
        bottom: 10,
    },
    RoundBtn: {
        position: "absolute",
        right: 2,
        bottom: 40,
        padding: 2
    }

});

