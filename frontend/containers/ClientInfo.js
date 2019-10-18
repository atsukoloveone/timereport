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
    getClientInfo: clientId => {
      //ActionCreatorからActionを取得し、Storeに渡す
      dispatch(getClientInfo(clientId));
      dispatch(updateClient(clientId, value));
    },
    hideModal: () => {
      dispatch(hideModal());
    }
  };
};

// つなぎこみ
const ClientInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientInfoView); //ViewにはReact.jsで用意したClientInfoを使用する

export default ClientInfo;
