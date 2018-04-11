import React from 'react';
import AddActivity from '../containers/AddActivity';
import VisibleActivityList from '../containers/VisibleActivityList';

// AppはActivity追加、Activity一覧、フィルタリングメニュー（Footer）から成る
class AppActivity extends React.Component {
  render() {
    return (
        <div style={{paddingLeft:10}}>
            <AddActivity />
            <VisibleActivityList />
        </div>
    );
  }
}

export default AppActivity;