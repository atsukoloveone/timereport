import { connect } from "react-redux";
import { getClientsIfNeeded, updateClientInfo } from "../actions/client";
import ClientInfoView from "../components/ClientInfoView";

// StateをViewのプロパティに落としこむ
const mapStateToProps = state => {
  console.log("mapStateToProps ClientInfo");
  console.log(state.clientApp);
  return {
    modalIsOpen: state.clientApp.modalIsOpen
  };
};

// ViewからStateにイベントを伝える
const mapDispatchToProps = dispatch => {
  return {
    updateClientInfo: clientId => {
      //ActionCreatorからActionを取得し、Storeに渡す
      dispatch(updateClientInfo(clientId, modalProps, modalType));
    }
  };
};

// つなぎこみ
const ClientInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientInfoView); //ViewにはReact.jsで用意したClientInfoを使用する

export default ClientInfo;
