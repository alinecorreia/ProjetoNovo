import React, {useState, useEffect, useLayoutEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import Axios from 'axios';



// import { Container } from './styles';


const data = [
    {
    nome: 'fernando',
    idade: 15,
    },
    {
    nome: 'alberto',
    idade: 19,
    },
];



export default function home(props) {
    const [requisicao, setRequisicao] = useState([]);

    function res() {
        Axios.get('https://jsonplaceholder.typicode.com/posts/1').then(e => setRequisicao(e.data))
        
    }

    function navigate() {
       props.navigation.navigate('perfil');
    }

    // async function res() {
    //     return await fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(json => setRequisicao(json.data))
    // }

    useEffect(() => {
        // res();
        console.log('alo');
    },[]);

  return (
      <View  style={styles.Container}>

  <View>{data.map( e => {
      return (
          <View key={e.nome}>
              <Text>
                {e.nome}
                </Text>
          </View>
      )
  })}
  </View>


  <View>
      <TouchableOpacity onPress={() => navigate()}>
          <Text>Ir para perfil</Text>
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