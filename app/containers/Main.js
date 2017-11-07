/**
 * Created by yeshaojian on 2017/4/22.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';


import { connect } from 'react-redux';
import { changeText } from '../redux/action/action';
import TestText from '../components/TestText';


class Main extends Component {
    render() {

        // 通过 props 拿到保存的 onChangeText
        const { onChangeText } = this.props;

        return (
            <View style={styles.container}>
                {/* 需要改变的组件 */}
                <TestText {...this.props} />

                {/* 按钮 */}
                <TouchableOpacity
                    onPress={onChangeText}>
                    <Text>改变文字按钮</Text>
                </TouchableOpacity>
            </View>
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

// 获取 state 变化
const mapStateToProps = (state) => {
    return {
        value: state.text,
    }
};

// 发送行为
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeText: () => dispatch(changeText('外部传值')),
    }
};

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(mapStateToProps, mapDispatchToProps)(Main);
