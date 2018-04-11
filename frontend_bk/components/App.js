import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

// AppはTODO追加、TODO一覧、フィルタリングメニュー（Footer）から成る
class App extends React.Component {
  render() {
    return (
        <div style={{paddingLeft:10}}>
            <AddTodo />
            <VisibleTodoList />
        </div>
    );
  }
}

export default App;
