import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/Home';
import Signin from './src/screens/Signin';
import Cloth from './src/screens/Cloth';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
        <Stack.Screen name='Signin' component={Signin} options={{headerShown:false}} />
        <Stack.Screen name='Cloth' component={Cloth} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

