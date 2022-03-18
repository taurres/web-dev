import React from 'react';
import PostSummaryList from '../PostSummaryList/index';

const ExploreComponent = () => {
  return (
    <>
      <div className="border-1">
        {/*search panel*/}
        <div className="wd-search-panel">
                <span className="wd-search-icon wd-font-grey">
                    <i className="fas fa-search "></i>
                </span>
          <input className="wd-search-panel-input wd-rounded-corners-all-around wd-font-grey"
                 type="text"
                 placeholder="Search Twitter"/>
          <span className="wd-gear-icon wd-font-blue wd-font-size-20px">
                    <a href="#"><i className="fas fa-cog"></i></a>
                </span>
        </div>
        {/*navigation panel*/}
        <div className="nav nav-tabs mb-2 justify-content-between">
          <div className="nav-item">
            <a className="nav-link active" aria-current="page" href="for-you.html">For you</a>
          </div>
          <div className="nav-item">
            <a className="nav-link" href="trending.html">Trending</a>
          </div>
          <div className="nav-item">
            <a className="nav-link" href="news.html">News</a>
          </div>
          <div className="nav-item">
            <a className="nav-link" href="sports.html">Sports</a>
          </div>
          <div className="nav-item d-none d-md-block">
            <a className="nav-link" href="entertainment.html">Entertainment</a>
          </div>
        </div>

      </div>
      {/*showcase picture*/}
      <div className="position-relative mb-2">
        <img className="img-fluid"
             src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1"/>
        <div className="wd-picture-title fs-2 text-white">SpaceX's Starship</div>
      </div>
      <PostSummaryList/>
    </>
  );
};
export default ExploreComponent;