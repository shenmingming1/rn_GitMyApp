import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ListView,
    RefreshControl,
} from 'react-native';
import ScrollableTabView,{ScrollableTabBar}from 'react-native-scrollable-tab-view'
import NavigationBar from '../common/NavigationBar'
import DataRepository from '../expand/dao/DataRepository'
import RepositoryCell from '../common/RepositoryCell'
const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
export default class PopularPage extends Component{
    render(){
        return<View style={styles.container}>
            <NavigationBar
            title='最热'
            statusBar={{
                backgroundColor:'#2196F3'
            }}
            />
            <ScrollableTabView
                tabBarBackgroundColor='#2196F3'
                 tabBarInactiveTextColor='mintcream'
                tabBarActiveTextColor='white'
                tabBarUnderlineStyle={{backgroundColor:'#e7e7e7', height:2}}
            renderTabBar={()=><ScrollableTabBar/>}
            >
                <PopularTab tabLabel="Java">Java</PopularTab>
                <PopularTab tabLabel="iOS">iOS</PopularTab>
                <PopularTab tabLabel="Android">Android</PopularTab>
                <PopularTab tabLabel="JavaScript">JS</PopularTab>
            </ScrollableTabView>
        </View>
    }
}
class PopularTab extends Component{
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            result: '',
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
        this.dataRepository=new DataRepository();

    }
    componentDidMount(){
        this.onLoad();
    }
    onLoad(){
        this.setState({
            isLoading:true
        })
        let url=URL+this.props.tabLabel+QUERY_STR;
        this.dataRepository.fetchNetRepository(url)
            .then(result=>{
                this.setState({
                    // result:JSON.stringify(result)
                    dataSource:this.state.dataSource.cloneWithRows(result.items),
                    isLoading:false
                })

            })
            .catch(error=>{
                this.setState({
                    // result:JSON.stringify(error)
                    isLoading:false
                })
            })
    }
    renderRow(data){
        return<RepositoryCell result={data}/>
    }
    render(){
        return<View style={{flex:1}}>
          <ListView
              dataSource={this.state.dataSource}
              renderRow={(data)=>this.renderRow(data)}
              refreshControl={
                  <RefreshControl
                      refreshing={this.state.isLoading}
                      onRefresh={()=>this.onLoad()}
                      colors={['#2196F3']}
                      tintColor={['#2196F3']}
                      title={'loading...'}
                      titleColor={'#2196F3'}

                  />
              }
          />
        </View>
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    tips:{
      fontSize:20
    }

})