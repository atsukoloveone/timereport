import { connect } from "react-redux";
import { getClientInfo, updateClient, hideModal } from "../actions/client";
import ClientInfoView from "../components/ClientInfoView";

// StateをViewのプロパティに落としこむ
const mapStateToProps = state => {
  console.log("mapStateToProps ClientInfo");
  console.log(state.clientApp);
  return {
    client: state.clientApp.client,
    modalIsOpen: state.clientApp.modalIsOpen
  };
};

// ViewからStateにイベントを伝える
const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => {
      dispatch(hideModal());
    },
    updateClient: (clientId, value) => {
      dispatch(updateClient(clientId, value));
    }
  };
};

// つなぎこみ
const ClientInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientInfoView); //ViewにはReact.jsで用意したClientInfoを使用する

export default ClientInfo;
