import React from 'react';

import {
    TouchableOpacity
} from 'react-native';

import {
    style
} from './style';

export const SButton = props => {
 
    let {
        onPress,
        children
    } = props;

    return ( 
        <TouchableOpacity 
            onPress={onPress} 
            style={style.container}>
            {children}
        </TouchableOpacity>
    )
}