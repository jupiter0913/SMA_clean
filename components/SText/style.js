import {
    StyleSheet,
} from 'react-native';

import {
    Theme
} from '../../constants'


export const stextStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'stretch',
        marginBottom: 5,
        borderWidth: 2,
        borderRadius: 2,
        borderColor: Theme.COLORS.PRIMARY,
    },
    containerDisabled: {
        backgroundColor: Theme.COLORS.DEFAULT,
        borderColor: Theme.COLORS.DEFAULT,
    },
    touchable: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        //backgroundColor: Theme.COLORS.SWITCH_ON
    },  
    text: {
        fontSize: 15,
        paddingLeft: 10,
        color: Theme.COLORS.BLACK,
        textAlign: 'left',
        //backgroundColor: Theme.COLORS.BUTTON_COLOR
    },
    textDisabled: {
        color: Theme.COLORS.DISABLED_TEXT,
        backgroundColor: Theme.COLORS.DEFAULT,
        borderColor: Theme.COLORS.DEFAULT
    },
    icon: {
        paddingRight: 10,
        paddingLeft: 10,
        justifyContent: 'center',
        //backgroundColor: Theme.COLORS.SWITCH_OFF
    }
});
