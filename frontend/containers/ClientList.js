import { connect } from "react-redux";
import { getClientsIfNeeded, updateClientInfo } from "../actions/client";
import ClientListView from "../components/ClientListView";

// StateをViewのプロパティに落としこむ
const mapStateToProps = state => {
  console.log("mapStateToProps clientlist");
  console.log(state.clientApp);
  return {
    clients: state.clientApp.clients,
    modalIsOpen: state.clientApp.modalIsOpen
  };
};

// ViewからStateにイベントを伝える
const mapDispatchToProps = dispatch => {
  return {
    getClientsIfNeeded: () => dispatch(getClientsIfNeeded()),
    updateClientInfo: clientId =>
      dispatch(updateClientInfo(clientId, null, null))
  };
};

// つなぎこみ
const ClientList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientListView); //ViewにはReact.jsで用意したClientListを使用する

export default ClientList;