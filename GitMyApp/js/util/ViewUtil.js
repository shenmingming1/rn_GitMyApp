import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';
export default class ViewUtil{
    static getLeftButton(callBack){
        return  <TouchableOpacity
            style={{padding:8}}
            onPress={callBack}
        >
            <Image
                style={{width:26,height:26,titleColor:'white'}}
                source={require('../../res/images/ic_arrow_back_white_36pt.png')}></Image>
        </TouchableOpacity>
    }
}