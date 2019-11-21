import React from "react";
import Activity from "../containers/Activity";

// AppはActivity追加、Activity一覧、フィルタリングメニュー（Footer）から成る
function AppActivity() {
  return (
    <div style={{ paddingLeft: 10 }}>
      <Activity />
    </div>
  );
}

export default AppActivity;
