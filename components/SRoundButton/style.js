import {
    StyleSheet,
} from 'react-native';

import {
    Theme
} from '../../constants'

export const sRoundStyle = StyleSheet.create({
    container: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: Theme.COLORS.PRIMARY,
        borderRadius: 40,
        borderColor: Theme.COLORS.WHITE,
        shadowColor: Theme.COLORS.BLACK,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1.0,
        shadowRadius: 2,  
        elevation: 1
    },
    containerDisabled: {
        backgroundColor: Theme.COLORS.DEFAULT,
    }
});
