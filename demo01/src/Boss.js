import React, { Component } from 'react';
class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow:true
    }
    this.handleBoss = this.handleBoss.bind(this)
  }
  render() { 
    return ( 
      <div>
        <div 
          className={this.state.isShow?'show':'hide'}
        >
            Boss级任务---新垣结衣
        </div>
        <button onClick={this.handleBoss}>召唤Boss</button>
      </div>
     )
  }
  handleBoss() {
    this.setState({
      isShow:!this.state.isShow
    })
  }
}
 
export default Boss;