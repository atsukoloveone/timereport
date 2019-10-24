import { connect } from "react-redux";
import {
  getClientsIfNeeded,
  getClientInfo,
  deleteClient,
  newClient
} from "../actions/client";
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
    getClientInfo: clientId => dispatch(getClientInfo(clientId)),
    deleteClient: clientId => dispatch(deleteClient(clientId)),
    newClient: () => dispatch(newClient())
  };
};

// つなぎこみ
const ClientList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientListView); //ViewにはReact.jsで用意したClientListを使用する

export default ClientList;
