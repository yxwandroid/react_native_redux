/**
 * Created by yeshaojian on 2017/4/22.
 */
// Reducer：reducer 的作用就是根据传入的 Action行为和旧的 state对象，返回一个新的 state ，
// 然后组件会根据 state 刷新。当我们确定了组件的 state 对象结构 和 action 行为的时候就可以编写 reducer 中的内容
import {CHANGE_TEXT, changeText} from '../action/action';

const mainReducer = (state = changeText('welcome to React Native'), action) => {

    const newState = state;
    const text = action.text;

    // 判断 action 类型
    switch (action.type) {
        case CHANGE_TEXT:
            return {
                ...newState,
                text: '改变了' + text
            };

        default:
            return {
                ...newState,
                text: state.text
            }
    }
};

export default mainReducer;
