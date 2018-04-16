import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    AsyncStorage,
    TextInput

} from 'react-native';
import NavigationBar from './NavigationBar'
import  Toast,{DURATION} from 'react-native-easy-toast'
const key = 'KEY';
export default class AsyncStorageTest extends Component{


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            result:''
        };

    }
    onSave(){

     AsyncStorage.setItem(key,this.text,(error)=>{
          if (!error){
              this.toast.show('保存成功',DURATION.LENGTH_SHORT)
         } else {
              this.toast.show('保存失败',DURATION.LENGTH_SHORT)
        }
    })
    }
    onRemove(){
AsyncStorage.removeItem(key,(error)=>{
    if (!error){
        this.toast.show('移除成功',DURATION.LENGTH_SHORT)
    } else {
        this.toast.show('移除失败',DURATION.LENGTH_SHORT)
    }
})
    }
    onFetch(){

     AsyncStorage.getItem(key,(error,result)=>{
         if (!error){
             if (result===''||result===null) {
                 this.toast.show('取出的内容不存在')
             }else {
                 this.toast.show('取出的内容为：' + result)
             }
         } else {
             this.toast.show('取出的失败')
         }
     })
    }

    render() {
        return (<View style={styles.container}>
             <NavigationBar
             title='AsyncStorage的基本使用'
             />
                <TextInput style={{borderWidth:1,height:40,margin:5}}
                           onChangeText={text=>this.text=text}
                ></TextInput>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.text}
                          onPress={()=>this.onSave()}
                    >保存</Text>
                    <Text style={styles.text}
                          onPress={()=>this.onRemove()}
                    >移除</Text>
                    <Text style={styles.text}
                          onPress={()=>this.onFetch()}
                    >取出</Text>
                </View>
                <Toast ref={toast=>{this.toast=toast}}/>
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
        fontSize:22,
        margin:5
    },
    line:{
        height:1,
        backgroundColor:'black'
    }
})