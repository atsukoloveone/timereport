import { connect } from "react-redux";
import {
  updateClient,
  addClient,
  deleteClient,
  hideModal,
} from "../actions/client";
import ClientInfoView from "../components/ClientInfoView";

// StateをViewのプロパティに落としこむ
const mapStateToProps = (state) => {
  console.log("mapStateToProps ClientInfo");
  console.log(state.clientApp);
  return {
    client: state.clientApp.client,
    modalIsOpen: state.clientApp.modalIsOpen,
  };
};

// ViewからStateにイベントを伝える
const mapDispatchToProps = (dispatch) => ({
  hideModal: () => {
    dispatch(hideModal());
  },
  addClient: (value) => {
    dispatch(addClient(value));
  },
  updateClient: (clientId, value) => {
    dispatch(updateClient(clientId, value));
  },
  deleteClient: (clientId) => {
    dispatch(deleteClient(clientId));
  },
});

// つなぎこみ
const ClientInfo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientInfoView); // ViewにはReact.jsで用意したClientInfoを使用する

export default ClientInfo;
