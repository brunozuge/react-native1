import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
    render() {
        let nome = 'Zuge';
        let img = 'https:blog.sc.senac.br/wp-content/uploads/2012/08/2-700x249.jpg'


        return (
            <View>
                <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>
                    Eai Zuge
                </Text>
                <Image 
    source={{ uri: img}} 
    style={{ width: 1200, height: 400}} 
/>

<Text style={{fontSize: 20, margin: 15, color:'blue'}}>{nome}</Text>

            </View>
        );
    }
}

export default App;
