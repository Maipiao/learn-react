import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
import store from './store' // 引入store

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.storeChange = this.storeChange.bind(this)  //转变this指向
    store.subscribe(this.storeChange) //订阅Redux的状态
  }
  render() { 
    return ( 
      <div style={{margin:'10px'}}>
        <div>
          <Input 
            placeholder='write something'
            style={{width:'250px',marginRight:'10px'}}
            value={this.state.inputValue}
            onChange={this.changeInputValue}>
          </Input>
          <Button 
            type="primary"
            onClick={this.clickBtn}
          >增加</Button>
        </div>
        <div style={{width:'325px',marginTop:'10px'}}>
          <List dataSource={this.state.list}
                bordered
                renderItem={item=>(<List.Item>{item}</List.Item>)}
          >
          </List>
        </div>
      </div>
    );
  }
  // 输入框事件
  changeInputValue(e){
    const action = {
        type:'changeInput',
        value:e.target.value
    }
    store.dispatch(action)
  }
  // 改变状态
  storeChange(){
    this.setState(store.getState())
  }
  // 新增事件
  clickBtn(e){
    if (!this.state.inputValue) return
    const action = { type:'addItem'}
    store.dispatch(action)
  }
}
 
export default TodoList;