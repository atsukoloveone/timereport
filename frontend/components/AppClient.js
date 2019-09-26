import React from "react";
import AddClient from "../containers/AddClient";
import DeleteClient from "../containers/DeleteClient";
import VisibleClientList from "../containers/VisibleClientList";

// AppはClient追加、Client一覧、フィルタリングメニュー（Footer）から成る
class AppClient extends React.Component {
  render() {
    return (
      <div style={{ paddingLeft: 10 }}>
        <AddClient />
        <VisibleClientList />
      </div>
    );
  }
}

export default AppClient;
