import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/home';
import Perfil from './pages/perfil';
import Userform from './pages/userform';


const routes = createSwitchNavigator({
    home: {screen: Home},
    perfil: {screen: Perfil},
    userform: {screen: Userform},
}, {
    backBehavior: 'history',
});


export default createAppContainer(routes);



