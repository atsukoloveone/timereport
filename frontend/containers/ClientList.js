import { connect } from "react-redux";
import {
  getClientsIfNeeded,
  getClientInfo,
  deleteClient,
  newClient,
} from "../actions/client";
import ClientListView from "../components/ClientListView";

// StateをViewのプロパティに落としこむ
const mapStateToProps = (state) => {
  console.log("mapStateToProps clientlist");
  console.log(state.clientApp);
  return {
    clients: state.clientApp.clients,
    modalIsOpen: state.clientApp.modalIsOpen,
    newClient: state.clientApp.newClient,
  };
};

// ViewからStateにイベントを伝える
const mapDispatchToProps = (dispatch) => ({
  getClientsIfNeeded: () => dispatch(getClientsIfNeeded()),
  getClientInfo: (clientId) => dispatch(getClientInfo(clientId)),
  deleteClient: (clientId) => dispatch(deleteClient(clientId)),
  newClient: () => dispatch(newClient()),
});

// つなぎこみ
const ClientList = connect(mapStateToProps, mapDispatchToProps)(ClientListView);

export default ClientList;
