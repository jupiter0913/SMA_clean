import React from 'react';

import {
    TouchableOpacity
} from 'react-native';

import {
    sRoundWeekStyle,
} from './style';

export const SRoundWeekButton = props => {
 
    let {
        onPress,
        children,
        disabled,
        selected
    } = props;
    return ( 
        <TouchableOpacity 
            onPress={onPress} 
            disabled={disabled}
            style={[ 
                sRoundWeekStyle.container,
                selected ? sRoundWeekStyle.containerSelected : {}
            ]}>
            {children}
        </TouchableOpacity>
    )
}