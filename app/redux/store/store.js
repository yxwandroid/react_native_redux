/**
 * Created by yeshaojian on 2017/4/22.
 */
// Store：当 reducer 返回了新的 state 后，
// 这个 state 怎么传到组件和存储就成了问题，
// redux 就是把这个状态统一放到 store 中进行管理
import Reducer from '../reducer/reducer';
import {createStore} from 'redux';

export default () => {

    // 根据 reducer 初始化 store
    const store = createStore(Reducer);

    return store;
}
