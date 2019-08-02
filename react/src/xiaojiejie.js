import React,{Component,Fragment} from 'react'
import XiaojiejieItem from './XiaojiejieItem'
import './style.css' 
import axios from 'axios'
import Boss from './Boss'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class Xiaojiejie extends Component {
  
  // js构造函数 用于其他任何函数执行
  constructor(props){
    super(props)  // 调用父类的构造函数,固定写法
    this.state = {
      show:true,
      inputValue:'', // input中的值
      list:[] // 服务列表
    }
  }
  componentWillMount() {
    console.log('componentWillMount-----组件将要挂在到也页面')
  }

  // 需要返回一个布尔值,true时才会继续执行,false不更新
  // nextProps:变化后的属性;
  // nextState:变化后的状态;
  shouldComponentUpdate(nextProps,nextState) {
    console.log('1-shouldComponentUpdate')
    return true
  }

  componentWillUpdate(){
    console.log('2-componentWillUpdate')
  }

  // componentWillMount和componentDidMount这两个生命周期函数，只在页面刷新时执行一次，而render函数是只要有state和props变化就会执行，这个一定要注意。
  render(){
    console.log('3-render----组件挂在中')
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
          ref={(input) => this.input = input}
          />
            <button onClick={this.addListener.bind(this)}>增加服务</button>
        </div>
        <ul ref={(ul) => this.ul = ul}>
        <TransitionGroup>
          {
            this.state.list.map((item,index) => {
              return (
                  // 父组件方法通过属性方式传给子组件用 2019.8.1
                  <CSSTransition
                    timeout={1000}
                    classNames='boss-text'
                    appear={true}
                    key={index+item} 
                  >
                    <XiaojiejieItem 
                      avname='波多野结衣'
                      content={item} 
                      key={index + item}
                      index={index}
                      deleteItem={this.deleteItem.bind(this)}
                    />
                  </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        </ul>
        <Boss />
      </Fragment>
    )
  }

  // 一般推荐在这个页面请求初始化数据
  componentDidMount() {
    console.log('componentDidMount-----组件完成挂载页面')
    axios.get('http://rap2api.taobao.org/app/mock/227263/serviceList')
        .then(res => {
          this.setState({
            list:res.data.list
          })
        })
        .catch(err => {
          console.log(console.log(err))
        })
  }

  componentDidUpdate() {
    console.log('4-componentDidUpdate')
  }

  /* 
    绑定事件需要注意的事项:
      一个是this指向不对，你需要重新用bind设置一下指向(ES6的语法)。
      另一个是React中改变值需要使用this.setState方法。
  */

  // 输入框事件
  inputChange(){
    this.setState({
      inputValue: this.input.value
    })
  }

  // 添加服务事件
  addListener() {
    this.setState({
      list:[...this.state.list,this.state.inputValue], // 扩展运算符
      inputValue:''
    }, () => {
      console.log(this.ul.querySelectorAll('li').length)
    })
    // 由于setState事件是异步事件,所以统计ref等信息需要放在事件回调中进行
  }

  // 删除项目
  deleteItem(index) {
    let list = this.state.list
    list.splice(index,1)
    this.setState({ list:list })
  }

}

export default Xiaojiejie