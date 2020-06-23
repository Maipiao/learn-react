import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 作用:校验属性类型

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props)

    // 便于以后性能优化
    this.handleClick = this.handleClick.bind(this)
  }

  // 只在子组件中有效
  // 也就是说这个组件第一次存在于Dom中，函数是不会被执行的;
  // 如果已经存在于Dom中，函数才会被执行。
  componentWillReceiveProps(){
    console.log('child---componentWillReceiveProps')
  }
  
  // 需要返回一个布尔值,true时才会继续执行,false不更新
  // nextProps:变化后的属性;
  // nextState:变化后的状态;
  // 属于性能优化
  shouldComponentUpdate(nextProps,nextState) {
    return nextProps.content !== this.props.content
  }
  render() { 
    return (
      <li 
        onClick={this.handleClick}
        style={{cursor:'pointer'}}
      >
       {this.props.avname} 为你服务- {this.props.content}
      </li>
     )
  }

  componentWillUnmount() {
    console.log('child---componentWillUnmount')
  }

  // 点击删除
  // 子组件通过父组件传过来的方法调用来删除
  handleClick(){
    this.props.deleteItem(this.props.index)
  }
}

// 校验写在class外面
XiaojiejieItem.propTypes = {
  avname:PropTypes.string.isRequired, // 强制传递
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func,
}

// 设置默认属性值
XiaojiejieItem.defaultProps = {
  avname:'上原亚衣'
}
 
export default XiaojiejieItem;