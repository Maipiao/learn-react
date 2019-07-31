import React,{Component,Fragment} from 'react'

class Xiaojiejie extends Component {
  
  // js构造函数 用于其他任何函数执行
  constructor(props){
    super(props)  // 调用父类的构造函数,固定写法
    this.state = {
      inputValue:'', // input中的值
      list:['基础按摩','精油开背','躺式采耳','中药足疗'] // 服务列表
    }
  }
  render(){
    return (
      <Fragment>
        {/* 在react里写注释 
            最外层必须用标签包裹
            或者在react16中使用Fragment标签
            date 2019.7.31
        */}
        <div>
          <input value={this.state.inputValue}  
          onChange={ this.inputChange.bind(this) }
          />
            <button onClick={this.addListener.bind(this)}>增加服务</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index) => {
              return (
                <li 
                key={index}
                onClick={this.deleteItem.bind(this,index)}
                style={{cursor: 'pointer' }}
                >
                  {item}
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  /* 
    绑定事件需要注意的事项:
      一个是this指向不对，你需要重新用bind设置一下指向(ES6的语法)。
      另一个是React中改变值需要使用this.setState方法。
  */

  // 输入框事件
  inputChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }

  // 添加服务事件
  addListener() {
    this.setState({
      list:[this.state.inputValue,...this.state.list], // 扩展运算符
      inputValue:''
    })
  }

  // 删除项目
  deleteItem(index) {
    let list = this.state.list
    list.splice(index,1)
    this.setState({ list:list })
  }

}

export default Xiaojiejie