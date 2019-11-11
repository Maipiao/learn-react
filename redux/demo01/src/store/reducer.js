const defaultState = {
  list:[
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
  ],
  inputValue:''
}
export default (state = defaultState,action)=> {
  if(action.type === 'changeInput'){
    let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
    newState.inputValue = action.value
    return newState
  }
  //state值只能传递，不能使用
  if(action.type === 'addItem' ){ //根据type值，编写业务逻辑
    let newState = JSON.parse(JSON.stringify(state)) 
    newState.list.push(newState.inputValue)  //push新的内容到列表中去
    newState.inputValue = ''
    return newState
  }
  return state
}