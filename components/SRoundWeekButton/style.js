import {
    StyleSheet,
} from 'react-native';

import {
    Theme
} from '../../constants'

export const sRoundWeekStyle = StyleSheet.create({
    container: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        marginLeft: 2,
        marginRight: 2,
        backgroundColor: Theme.COLORS.WHITE,
        borderRadius: 50,
        borderColor: Theme.COLORS.WHITE,
        shadowColor: Theme.COLORS.BLACK,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1.0,
        shadowRadius: 2,  
        elevation: 1
    },
    containerSelected: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        marginLeft: 2,
        marginRight: 2,
        backgroundColor: Theme.COLORS.SELECTED,
        borderRadius: 50,
        borderColor: Theme.COLORS.WHITE,
        shadowColor: Theme.COLORS.BLACK,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1.0,
        shadowRadius: 2,  
        elevation: 1
    }
});
