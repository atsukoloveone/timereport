import React from "react";
import { connect } from "react-redux";
import { addActivity } from "../actions/activity";
import SaveActivityView from "../components/SaveActivityView";

// StateをViewのプロパティに落としこむ
const mapStateToProps = state => {
  return {
    activities: state.activityApp.activities
  };
};

// ViewからStateにイベントを伝える
const mapDispatchToProps = dispatch => ({
  addActivity: value => dispatch(addActivity(value))
});

const SaveActivity = connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveActivityView); //ViewにはReact.jsで用意したActivityListを使用する

export default SaveActivity;
