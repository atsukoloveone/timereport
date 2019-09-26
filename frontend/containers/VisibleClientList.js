import { connect } from "react-redux";
import { toggleClient } from "../actions/client";
import { changeClient } from "../actions/client";
import ClientList from "../components/ClientList";

// フィルタリング状態によってTODOリストの絞り込みを行う
const getVisibleActivities = (clients, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return clients;
    case "SHOW_COMPLETED":
      return clients.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return clients.filter(t => !t.completed);
  }
};

// StateをViewのプロパティに落としこむ
const mapStateToProps = state => {
  console.log("mapStateToProps clients");
  console.log(state.clients);
  return {
    clients: getVisibleActivities(
      state.clientApp.clients,
      state.clientApp.visibilityFilter,
      state.clientApp.currentActionId
    )
  };
};

// ViewからStateにイベントを伝える
const mapDispatchToProps = dispatch => {
  return {
    onClientClick: actionId => {
      //ActionCreatorからActionを取得し、Storeに渡す
      dispatch(changeClient(actionId));
    }
  };
};

// つなぎこみ
const VisibleClientList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientList); //ViewにはReact.jsで用意したClientListを使用する

export default VisibleClientList;
