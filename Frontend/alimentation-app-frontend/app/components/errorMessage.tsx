import { Text, View } from "react-native";

interface ErrorMessageProps {
    message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return ( 
        <View>
            <Text>{message}</Text>
        </View>
     );
}

export default ErrorMessage;