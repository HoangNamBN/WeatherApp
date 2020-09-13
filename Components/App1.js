import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView,Navigator, View, Text, StatusBar, } from 'react-native';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';
StatusBar.setHidden(true);
export default class App1 extends Component {
    render() {
        return (
            <Navigator
                initalRoute={{name:'MAIN'}}
                renderScene={(route, navigator) => {
                    switch (route.name){
                        case 'MAIN': return <Main navigator={navigator} />;
                        case 'CHANGE_INFO': return <ChangeInfo navigator={navigator} />;
                        case 'AUTHENTICATION': return <Authentication navigator={navigator} />;
                        default: return <OrderHistory navigator={navigator}/>
                    }
                }}
            />
        );
    }
}
