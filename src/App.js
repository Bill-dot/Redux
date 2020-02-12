import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Provider } from 'react-redux'
import reducer from './Reducers'
import {createStore} from 'redux'
import LibraryList from './components/LibraryList'

export default class App extends Component{

    render(){
        return(
            <Provider store={createStore(reducer)}>
                <View style={{flex:1}}>
                    <LibraryList/>
                </View>
            </Provider>
        )
    }
}

const styles=StyleSheet.create({})