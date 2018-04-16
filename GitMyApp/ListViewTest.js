import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ListView,
    RefreshControl
} from 'react-native';
import NavigationBar from './NavigationBar'
import Toast,{DURATION} from 'react-native-easy-toast'
var  data={
    "result":[
        {
            "email":"s.hernana@williams.net",
            "fullName":"张三张三张三"
        },
        {
            "email":"s.hernana@williams.net",
            "fullName":"张三张三张三"
        },
        {
            "email":"s.hernana@williams.net",
            "fullName":"张三张三张三"
        },
        {
            "email":"s.hernana@williams.net",
            "fullName":"张三张三张三"
        },
        {
            "email":"s.hernana@williams.net",
            "fullName":"张三张三张三"
        },
        {
            "email":"s.hernana@williams.net",
            "fullName":"张三张三张三"
        },
        {
            "email":"s.hernana@williams.net",
            "fullName":"张三张三张三"
        },
        {
            "email":"s.hernana@williams.net",
            "fullName":"张三张三张三"
        },
        {
            "email":"s.hernana@williams.net",
            "fullName":"张三张三张三"
        },
        {
            "email":"s.hernana@williams.net",
            "fullName":"张三张三张三"
        },
        {
            "email":"s.hernana@williams.net",
            "fullName":"张三张三张三"
        },{
            "email":"s.hernana@williams.net",
            "fullName":"张三张三张三"
        },

        {
            "email":"s.hernana@williams.net",
            "fullName":"张三张三张三"
        },{
            "email":"s.hernana@williams.net",
            "fullName":"张三张三张三"
        },{
            "email":"s.hernana@williams.net",
            "fullName":"张三张三张三"
        },

    ],
    "statusCode":0
};

export default class Girl extends Component{


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        this.state = {
            dataSource: ds.cloneWithRows(data.result),
            isLoading:true
        };
        this.onLoad();
    }

    renderRow(item){
        return<View>
            <TouchableOpacity
                onPress={()=>{
                    this.toast.show('你单击了'+item.fullName,DURATION.LENGTH_SHORT)
            }}
            >
                <Text style={styles.text}>{item.fullName}</Text>
                <Text style={styles.text}>{item.email}</Text>
            </TouchableOpacity>

        </View>
    }
    renderSeparator(sectionID, rowID, adjacentRowHighlighted){
        return <View key={rowID} style={styles.line}>
        </View>
    }
    renderFooter(){
        // source={ require('./res/images/ic_polular.png')}
        return<Image source={require('./res/images/ic_trending.png')}></Image>
    }
    onLoad(){
        setTimeout(()=>{
            this.setState({
                isLoading:false
            })
        },2000);
    }
  render() {
      return (<View style={styles.container}>
              <NavigationBar
              title={'ListViewTest'}
              />
              <ListView dataSource={this.state.dataSource}
                        renderRow={(item)=>this.renderRow(item)}
                        renderSeparator={(sectionID, rowID, adjacentRowHighlighted)=>this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
                        renderFooter={()=>this.renderFooter()}
                        refreshControl={<RefreshControl
                            refreshing={this.state.isLoading}
                            onRefresh={()=>this.onLoad()}
                        />

                        }
              />
              <Toast ref={toast=>{
                  this.toast=toast
              }}/>
          </View>

      )
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'red',
        //justifyContent:'center'
    },
    text:{
        fontSize:22
    },
    line:{
        height:1,
        backgroundColor:'black'
    }
})