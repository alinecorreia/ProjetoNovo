import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// import { Container } from './styles';
const data = [{
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  }];

export default function perfil(props) {
    function navigate() {
        props.navigation.navigate('userform');
     }

  return (
    <View style={styles.Container}>
        

        {data.map(e => {
            return (<>

                <View>
                <Text>{e.body}</Text>
                    </View>
            </>)
        })}
        
        {/* <Text>
            {data[0].body}
            </Text> */}
            <View>
                <TouchableOpacity onPress={() => navigate()}>

                <Text>Adicionar post</Text>
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