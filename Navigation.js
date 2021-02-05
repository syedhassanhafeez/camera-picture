import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraApp from './Camera'
import Home from './Home';
import ImagePickerExample from './Gallery' 

const Stack = createStackNavigator();

function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Camera' component={CameraApp}/>
                {/* <Stack.Screen name='ImagePickerExample' component={ImagePickerExample}/> */}


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;