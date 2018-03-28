import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

// AppはTODO追加、TODO一覧、フィルタリングメニュー（Footer）から成る
class App extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
