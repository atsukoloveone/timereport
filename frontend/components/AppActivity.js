import React from "react";
import SaveActivity from "../containers/SaveActivity";
import DeleteActivity from "../containers/DeleteActivity";
import ActivityList from "../containers/ActivityList";

// AppはActivity追加、Activity一覧、フィルタリングメニュー（Footer）から成る
class AppActivity extends React.Component {
  render() {
    return (
      <div style={{ paddingLeft: 10 }}>
        <ActivityList />
        <SaveActivity />
      </div>
    );
  }
}

export default AppActivity;
