import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard
} from 'react-native';
import {
    TextInput,
    Button,
    Snackbar,
    Text
} from 'react-native-paper';
import { useAuth } from "../context/authContext";

export const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const {onLogin} = useAuth()
    const [isLoading, setLoading] = React.useState(false)
    const handleLogin = () => {
        setLoading(true)
        if (onLogin)
            onLogin(email, password).finally(() => setLoading(false))
    }

    const handleTouchablePress = () => {
        Keyboard.dismiss()
    };

    return (
        <TouchableWithoutFeedback onPress={handleTouchablePress}>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                <View>
                    <Text>Login View</Text>
                    <TextInput
                        disabled={isLoading}
                        label="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        mode="outlined"
                        style={styles.input}
                    />

                    <TextInput
                        disabled={isLoading}
                        label="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                        mode="outlined"
                        style={styles.input}
                    />

                    <Button
                        disabled={isLoading}
                        loading={isLoading}
                        mode="contained"
                        onPress={handleLogin}
                        style={styles.button}
                    >
                        Login
                    </Button>

                    <Snackbar
                        visible={snackbarVisible}
                        onDismiss={() => setSnackbarVisible(false)}
                        duration={3000}
                    >
                        Login successful!
                    </Snackbar>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 16,
    },
});
