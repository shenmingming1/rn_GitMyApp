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
import  Toast,{DURATION} from 'react-native-easy-toast'
import HttpUtils from './HttpUtils'
export default class FetchTest extends Component{


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            result:''
        };

    }

    onLoad(url){
        // fetch(url)
        //     .then((response)=>response.json())
        //     .then((responseJson)=>{
        //             this.setState({
        //                 result:JSON.stringify(responseJson)
        //             })
        //     })
        //     .catch(error=>{
        //         this.setState({
        //             result:JSON.stringify(error)
        //         })
        //     })
        HttpUtils.get(url)
            .then(result=>{
                this.setState({
                    result:JSON.stringify(result)
                })
            })
            .catch(error=>{
                this.setState({
                    result:JSON.stringify(error)
                })
            })
    }
    onSubmit(url,data){
        // fetch(url,{
        //     method:'post',
        //     header:{
        //         'Accept':'application/json',
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(data)
        // })
        //     .then(response=>response.json())
        //     .then(result=>{
        //         this.setState({
        //             result:JSON.stringify(result)
        //         })
        //     })
        //     .catch(error=>{
        //         this.setState({
        //             result:JSON.stringify(error)
        //         })
        //     })
        HttpUtils.post(url,data)
            .then(result=>{
                this.setState({
                    result:JSON.stringify(result)
                })
            })
            .catch(error=>{
                this.setState({
                    result:JSON.stringify(error)
                })
            })
    }
    render() {
        return (<View style={styles.container}>
             <NavigationBar
             title='Fetch的使用'
             />
                <Text style={styles.text} onPress={()=>this.onLoad('http://rapapi.org/mockjsdata/33333/test')
                }>获取数据
                </Text>
                <Text style={styles.text} onPress={()=>this.onSubmit('http://rapapi.org/mockjsdata/33333/sumit',{userName:'小明',password:'123456'})
                }>提交数据
                </Text>
                <Text></Text>
                <Text>返回结果：{this.state.result}</Text>
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