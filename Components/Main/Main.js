import React, { Component } from 'react';
import { SafeAreaView,TouchableOpacity, StyleSheet, ScrollView,Navigator, View, Text, StatusBar, } from 'react-native';
/* 
- TouchableOpacity:kích hoạt sự kiện onclick
*/
export default class Main extends Component {
    gotoAuthentication(){
        const { navigator } = this.props;
        navigator.push({name:'AUTHENTICATION'});
    }
    render() {
        return (
            <View style={{ flex:1,backgroundColor: 'blue' }}>
                <Text>Quản Lý Bán Hàng LapTop Hoàng Nam</Text>
                <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
