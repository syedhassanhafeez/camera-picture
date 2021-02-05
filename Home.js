import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';


function Home(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 32 }}>Syed Hassan Bin Hafeez</Text>
            <Button onPress={() => props.navigation.navigate('Camera')} title='Open Camera'  />
            <Button onPress={() => props.navigation.navigate('ImagePickerExample')} title='Open Image Picker'  />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Home;
