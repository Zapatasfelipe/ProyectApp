import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.aliceBlue,
    },

    primarybutton: {
        backgroundColor: colors.cobaltBlue,
        borderRadius:5,
        padding:10,
        marginBottom:10,
        width: '100%',
        alignItems:'center',
    },

    buttonText: {
        color: 'white',
        fontSize:18,
    },
});
