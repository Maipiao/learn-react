import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'

const data = [
  '早8点开晨会，分配今天的开发工作',
  '早9点和项目经理作开发需求讨论会',
  '晚5:30对今日代码进行review'
]
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div style={{margin:'10px'}}>
        <div>
          <Input placeholder="请输入" style={{width:'250px',marginRight:'10px'}}></Input>
          <Button type="primary">增加</Button>
        </div>
        <div style={{width:'325px',marginTop:'10px'}}>
          <List dataSource={data}
                bordered
                renderItem={item=>(<List.Item>{item}</List.Item>)}
          >
          </List>
        </div>
      </div>
    );
  }
}
 
export default TodoList;