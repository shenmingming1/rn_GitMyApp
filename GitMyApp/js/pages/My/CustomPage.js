import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import NavigationBar from '../../common/NavigationBar'
import ViewUtil from '../../util/ViewUtil'
import LanguageDao,{FLAG_LANGUAGE} from '../../expand/dao/LanguageDao'
export default class CustomPage extends Component{
  constructor(props){
      super(props)
      this.language = new LanguageDao(FLAG_LANGUAGE.flag_key)
      this.state={
          dataArray:[]

      }
  }
  componentDidMount(){
      this.onLoad();
  }
  onLoad(){
      this.language.fetch()
          .then(result=>{
              this.setState({
                  dataArray:result
              })
          })
          .catch(error=>{
              console.log(error())
          })

  }
    renderView(){
        <Text style={{height:400,width:400}}>{JSON.stringify(this.state.dataArray)}</Text>
    }

    onSave() {

        this.props.navigator.pop()
    }
    render(){
        let rightButton=<TouchableOpacity
        onPress={()=>this.onSave()}>
            <View style={{margin:8}}>
                <Text style={styles.title}>保存</Text>
            </View>
        </TouchableOpacity>
        return<View>
            <NavigationBar
            title={'自定义标签'}
            style={{backgroundColor:'#6495ED'}}
            leftButton={ViewUtil.getLeftButton(()=>this.onSave())}
            rightButton={rightButton}
            />
           <ScrollView style={{height:500,width:500}}>
               {this.renderView()}
           </ScrollView>
        </View>
    }
}
const styles = StyleSheet.create({
    title:{
        fontSize:20,
        color:'white'
    }
})