import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    navigator

} from 'react-native';
import NavigationBar from '../../common/NavigationBar'
import ViewUtil from '../../util/ViewUtil'
export default class CustomPage extends Component{
    onSave() {
        this.props.navigator.pop()
    }
    render(){
        let rightButton=<TouchableOpacity>
            <View>
                <Text style={styles.title}>保存</Text>
            </View>
        </TouchableOpacity>
        return<View>
            <NavigationBar
            title={'自定义标签'}
            style={{backgroundColor:'#6495ED'}}
            leftButton={ViewUtil.getLeftButton(()=>this.onSave())}
            />
            <Text style={{fontSize:22}}
                  onPress={this.onSave()}
            >自定义标签页</Text>
        </View>
    }
}
const styles = StyleSheet.create({
    title:{
        fontSize:20,
        color:'white'
    }
})