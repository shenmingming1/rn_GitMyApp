/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    ListView
    // Navigator
} from 'react-native';

// import {
//     Navigator
// }from 'react-native-deprecated-custom-components';
// import ListViewTest from './ListViewTest'
import TabNavigator from 'react-native-tab-navigator'
import PopularPage from './PopularPage'
import AsyncStorageTest from '../../AsyncStorageTest'
import MyPage from './My/MyPage'
export default class HomePage extends Component {
    // 构造
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab: 'tb_popular',

        };
    }
    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
               <TabNavigator.Item
                  selected={this.state.selectedTab === 'tb_popular'}
                  title="最热"
                  selectedTitleStyle={{color:'#2196F3'}}
                  renderIcon={() => <Image style={styles.image} source={ require('../../res/images/ic_polular.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#2196F3'}]} source={ require('../../res/images/ic_polular.png')} />}
                  badgeText="1"
                  onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
                <PopularPage/>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'tb_trending'}
                  title="趋势"
                  selectedTitleStyle={{color:'yellow'}}
                  renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'yellow'}]} source={require('../../res/images/ic_trending.png')} />}
                  // renderBadge={() => <CustomBadgeView />}
                  onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
                  <AsyncStorageTest/>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'tb_favorite'}
                  title='收藏'
                  selectedTitleStyle={{color:'red'}}
                  renderIcon={() => <Image style={styles.image} source={ require('../../res/images/ic_polular.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={ require('../../res/images/ic_polular.png')} />}
                  badgeText="1"
                  onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
                  <View style={styles.page}></View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'tb_my'}
                  title="我的"
                  selectedTitleStyle={{color:'yellow'}}
                  renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'yellow'}]} source={require('../../res/images/ic_trending.png')} />}
                  // renderBadge={() => <CustomBadgeView />}
                  onPress={() => this.setState({ selectedTab: 'tb_my' })}>
                  <MyPage {...this.props}/>
              </TabNavigator.Item>
          </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    page:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor:'yellow',
    },
    page2:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor:'yellow',
    },
    image:{
        height:22,
        width:22,
    }
});

