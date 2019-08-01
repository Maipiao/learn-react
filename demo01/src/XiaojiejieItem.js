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
  // 点击删除
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