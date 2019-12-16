import {  
    StyleSheet
} from 'react-native';

import { 
    Theme 
} from '../../constants'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    }
});

export const googlePlacesAutocompleteStyle = {
    container: {
        backgroundColor: Theme.COLORS.WHITE,
    },
    description: {
        fontWeight: 'bold',
        color: Theme.COLORS.PRIMARY,
    },
    textInputContainer: {
        width: '100%',
        height: 60,
        backgroundColor: Theme.COLORS.WHITE,
        margin: 0,
        padding: 0,
        borderColor: Theme.COLORS.WHITE,
        borderWidth: 0
    },
    textInput: {
        //flex: 1,
        fontSize: 15,
        borderWidth: 2,
        borderRadius: 3,
        height: 50,
        paddingLeft: 10,
        backgroundColor: Theme.COLORS.WHITE,
        borderColor: Theme.COLORS.PRIMARY,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5
    },
    listView: {
        backgroundColor: Theme.COLORS.WHITE
    },
    //predefinedPlacesDescription: {
    //    color: '#1faadb'
    //},
    separator: {
        backgroundColor: Theme.COLORS.WHITE,
        borderColor: Theme.COLORS.WHITE
    },
    poweredContainer: {
        height: 0
    }
};
