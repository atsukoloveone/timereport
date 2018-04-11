import { connect } from 'react-redux';
import { toggleActivity } from '../actions';
import ActivityList from '../components/ActivityList';



// StateをViewのプロパティに落としこむ
const mapStateToProps = (state) => {
  return {
    activites:state.activites
  };
};

// ViewからStateにイベントを伝える
const mapDispatchToProps = (dispatch) => {
  return {
    onActivityClick: (id) => {
      //ActionCreatorからActionを取得し、Storeに渡す
      dispatch(toggleActivity(id))
    }
  };
};

// つなぎこみ
const VisibleActivityList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityList); //ViewにはReact.jsで用意したTodoListを使用する

export default VisibleActivityList;
