import { Pressable, Text } from 'react-native';
import { globalStyles } from '../constants/theme';

interface Props {
    onPress: () => void;
    label: string;
}

const BotonPrimario = ({ onPress, label }: Props) => {
    return (
        <Pressable style={globalStyles.primarybutton} onPress={() => onPress()}>
            <Text style={globalStyles.buttonText}>{label}</Text>
        </Pressable>
    );
};

export default BotonPrimario;
