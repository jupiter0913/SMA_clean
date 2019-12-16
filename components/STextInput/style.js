import {  
    StyleSheet, 
} from 'react-native';

export const textInputStyle = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginBottom: 5
    },
    textInput: {
        flex: 1,
        fontSize: 15,
        borderWidth: 2,
        borderRadius: 2,
        height: 50,
        paddingLeft: 10,
        backgroundColor: "#ffffff",
        borderColor: '#1c1c1c'
    },
    textInputDisabled : {
        backgroundColor: "#e6e6e6",
        borderColor: "#e6e6e6"
    }
});
