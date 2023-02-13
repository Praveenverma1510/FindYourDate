import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './app/Navigator/Navigation';
import { navigate } from './RootNavigation';

const App = () => {
    return (
        <NavigationContainer>

            <Navigator  />

        </NavigationContainer>
    );
};

export default App;