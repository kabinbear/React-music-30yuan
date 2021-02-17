import React from 'react'
import {
    ListWrapper,
    ListItem,
    List
} from './style'
import {getCount} from '../../api/utils'
export default function index(props) {
    return (
     <ListWrapper>
         <h1 className="title">
            推薦歌單 
         </h1>
         <List>
             {
                 props.recommendList.map((item,index)=>{
                    return(
                        <ListItem key={"item.id"+ index}>
                            <div className="img_wrapper">
                                <div className="decorate"></div>
                                <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music"/>
                                <div className="play_count">
                                    <i className="iconfont play">&#xe885;</i>
                                    <span className="count">{getCount(item.playCount)}</span>
                                </div>
                            </div>
                            <div className="desc">{item.name}</div>
                        </ListItem>
                    )
                 })
             }
         </List>
     </ListWrapper>
    )
}
