import {
    StyleSheet,
} from 'react-native';

import {
    Theme
} from '../../constants'

export const style = StyleSheet.create({
    container: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: Theme.COLORS.PRIMARY,
        borderRadius: 50,
    }
});
