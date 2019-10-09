import { connect } from "react-redux";
import { getClientsIfNeeded } from "../actions/client";
import ClientListView from "../components/ClientListView";

// StateをViewのプロパティに落としこむ
const mapStateToProps = state => {
  console.log("mapStateToProps clientlist");
  console.log(state.clientApp);
  return {
    clients: state.clientApp.clients
  };
};

// ViewからStateにイベントを伝える
const mapDispatchToProps = dispatch => {
  return {
    getClientsIfNeeded: () => dispatch(getClientsIfNeeded()),
    onClientClick: actionId => {
      //ActionCreatorからActionを取得し、Storeに渡す
      dispatch(changeClient(actionId));
    }
  };
};

// つなぎこみ
const ClientList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientListView); //ViewにはReact.jsで用意したClientListを使用する

export default ClientList;
