/**
 * Created by yeshaojian on 2017/4/22.
 */

// Action：行为。它的作用就是将我们更新组件的 状态(state) 的每个动作抽象为一个行为，它有一个必须的参数 type，定义了 Action(行为) 的名称，其他参数可自定义

export const CHANGE_TEXT = 'CHANGE_TEXT';

// 初始化 CHANGE_TEXT 对象
export function changeText(text){
    return {
        type: CHANGE_TEXT,
        text
    }
};
