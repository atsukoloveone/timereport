import { connect } from "react-redux";
import {
  updateClient,
  addClient,
  deleteClient,
  hideModal,
  openedClientNew,
} from "../actions/client";
import ClientInfoView from "../components/ClientInfoView";

// StateをViewのプロパティに落としこむ
const mapStateToProps = (state) => {
  console.log("mapStateToProps ClientInfo");
  console.log(state.clientApp);
  return {
    client: state.clientApp.client,
    modalIsOpen: state.clientApp.modalIsOpen,
    newClient: state.clientApp.newClient,
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
  openedClientNew: () => {
    dispatch(openedClientNew());
  },
});

// つなぎこみ
const ClientInfo = connect(mapStateToProps, mapDispatchToProps)(ClientInfoView);

export default ClientInfo;
