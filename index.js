/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from "./telas/rotas";

//para desabilitar os alertas
console.disableYellowBox = true;



AppRegistry.registerComponent(appName, () => App);
