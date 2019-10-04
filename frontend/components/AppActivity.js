import React from "react";
import ActivityList from "../containers/Activity";

// AppはActivity追加、Activity一覧、フィルタリングメニュー（Footer）から成る
class AppActivity extends React.Component {
  render() {
    return (
      <div style={{ paddingLeft: 10 }}>
        <ActivityList />
      </div>
    );
  }
}

export default AppActivity;
