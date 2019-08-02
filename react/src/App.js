import React, {Component} from 'react'
// 这边的引用,是es6语法-结构赋值
/* 相当于
   import React from 'react'
   const Component = React.Component 
*/

class App extends Component {
  render(){
    return (
      <div>
        Hello Noah
      </div>
    )
  }
}

export default App