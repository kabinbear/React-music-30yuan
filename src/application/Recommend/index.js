import React, { useEffect } from 'react'
import {connect} from "react-redux"
import Slider from '../../components/slider'
import RecommendList from '../../components/list'
import Scroll from '../../baseUI/scroll'
import { Content } from './style'
import * as actionTypes from './store/actionCreators'
function Recommend(props) {
    const { bannerList, recommendList } = props;
    const { getBannerDataDispatch, getRecommendListDataDispatch } = props;
    useEffect(() => {
        getBannerDataDispatch();
        getRecommendListDataDispatch();
    }, []);
    const bannerListJS = bannerList ? bannerList.toJS() :[];
    const recommendListJS = recommendList? recommendList.toJS():[];
    return (
        <Content>
            <div className="before">
            </div>
            <Scroll className="list">
                <div>
                    <Slider bannerList={bannerListJS}></Slider>
                    <RecommendList recommendList={recommendListJS}>
                    </RecommendList>
                </div>
            </Scroll>
        </Content>
    )
}
const mapStateToProps = (state) => ({
    // 不要在这里将数据 toJS
    // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
    bannerList: state.getIn (['recommend', 'bannerList']),
    recommendList: state.getIn (['recommend', 'recommendList']),
  });
  // 映射 dispatch 到 props 上
  const mapDispatchToProps = (dispatch) => {
    return {
      getBannerDataDispatch () {
        dispatch (actionTypes.getBannerList ());
      },
      getRecommendListDataDispatch () {
        dispatch (actionTypes.getRecommendList ());
      },
    }
  };
  
  // 将 ui 组件包装成容器组件
  export default connect (mapStateToProps, mapDispatchToProps)(React.memo (Recommend));
