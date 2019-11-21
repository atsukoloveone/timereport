import React from "react";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";

// AppはTODO追加、TODO一覧、フィルタリングメニュー（Footer）から成る

const App = () => (
  <div style={{ paddingLeft: 10 }}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
