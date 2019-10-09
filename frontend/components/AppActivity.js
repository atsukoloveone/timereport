import React from "react";
import Activity from "../containers/Activity";

// AppはActivity追加、Activity一覧、フィルタリングメニュー（Footer）から成る
class AppActivity extends React.Component {
  render() {
    return (
      <div style={{ paddingLeft: 10 }}>
        <Activity />
      </div>
    );
  }
}

export default AppActivity;
