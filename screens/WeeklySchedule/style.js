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
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00BCD4",
        height: 300,
        width: '80%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 80,
        marginLeft: 40,

    },
    RoundBtn: {
        position: "absolute",
        right: 15,
        bottom: 15,
        padding: 2
    }

});

