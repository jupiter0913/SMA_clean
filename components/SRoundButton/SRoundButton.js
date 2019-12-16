import React from 'react';

import {
    TouchableOpacity
} from 'react-native';

import {
    sRoundStyle,
} from './style';

export const SRoundButton = props => {
 
    let {
        onPress,
        children,
        disabled
    } = props;

    return ( 
        <TouchableOpacity 
            onPress={onPress} 
            disabled={disabled}
            style={[ 
                sRoundStyle.container,
                disabled ? sRoundStyle.containerDisabled : {}
            ]}>
            {children}
        </TouchableOpacity>
    )
}