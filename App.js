import React, {Component} from 'react';

//Redux imports
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';
import Expo from 'expo';

import Head from './ui/Header';
import LookupBar from './lookup/LookupBar';
import ModalResults from './lookup/ModalResults';
import { StyleSheet, Text, View } from 'react-native';
import {Container} from 'native-base';


//redux middleware
const middleware = [ReduxThunk];


//redux store
const store = createStore(rootReducer,{},compose(applyMiddleware(ReduxThunk)));

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      isReady: false
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.setState({isReady: true});
  }

  render(){
    if(!this.state.isReady){
      return <Expo.AppLoading />;
    }

    return(
      <Provider store={store}>
        <Container>
        <Head />
        <ModalResults />
        <LookupBar />
        </Container>
      </Provider>
    );
  }
} 


