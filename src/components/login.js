/**
 * Created by ITcouple on 16/9/8.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class Login extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            text: ''
        };
    }

    _fetchLogin = ()=> {

    }

    render() {
        return (
            <View style={styles.loginContainer}>
                <Image style={styles.loginBackGround} source={require('../images/login.png')}>

                    <TouchableOpacity style={styles.btnStyle} onPress={this._fetchLogin}>
                        <Text>登陆</Text>
                    </TouchableOpacity>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
    },
    loginBackGround: {
        resizeMode: 'contain',
        height:600,
        width:1706
    },
    btnStyle:{
        width:200,
        height:40,
    }
});