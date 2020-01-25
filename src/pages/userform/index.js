import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function userform() {
  return (
    <View style={styles.Container}>
        <View>
            <Text> Digite seu texto</Text>
        </View>
        <View>
            <TextInput />
        </View>
        <View>
            <TouchableOpacity>
                <Text>Enviar</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },  
});
