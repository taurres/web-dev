import React from 'react';
import WhoToFollowListItem from './WhoToFollowListItem';
import who from './who.json';

const WhoToFollowList = () => {
  return (
    <div class="list-group wd-follow-panel wd-rounded-corners-all-around">
      <div class="list-group-item d-flex justify-content-between align-items-center">
        <a class="fw-bold wd-font-white" href="#">Who to follow</a>
      </div>
      {who.map(item => <WhoToFollowListItem who={item}/>)}
    </div>
  );
};
export default WhoToFollowList;