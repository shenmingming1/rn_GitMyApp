import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,


} from 'react-native';
import {
    Navigator
}from 'react-native-deprecated-custom-components';
import NavigationBar from '../../common/NavigationBar'
import CustomPage from './CustomPage'

export default class MyPage extends Component{

    render(){
        return<View>
            <NavigationBar
            title={'我的'}
            />
            <Text style={{fontSize:22}}
                  onPress={()=>{
                      this.props.navigator.push({
                          component:CustomPage,
                          params:{...this.props}
                      })
                  }}
            >自定义标签页</Text>
        </View>
    }
}