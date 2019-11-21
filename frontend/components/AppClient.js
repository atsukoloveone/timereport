import React from "react";
import ClientList from "../containers/ClientList";

// AppはClient追加、Client一覧、フィルタリングメニュー（Footer）から成る
function AppClient() {
  return (
    <div style={{ paddingLeft: 10 }}>
      <ClientList />
    </div>
  );
}

export default AppClient;
