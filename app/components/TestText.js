/**
 * Created by yeshaojian on 2017/4/22.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class TestText extends Component {
    render() {

        // 获取 props 中的 value
        const { text } = this.props;

        return (
            // 根据 value 改变内部文字
            <Text>{this.props.text}</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
