import React from 'react'
import './Widgets.css';
import{ TwitterTimelineEmbed , TwitterShareButton , TwitterTweetEmbed } from "react-twitter-embed"
import { Search } from '@mui/icons-material';

function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <Search className='widgets__searchIcon'/>
        <input  className="" placeholder="Search Twitter"type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={'1602004462390120448'}/>

        <TwitterTimelineEmbed sourceType="profile" screenName="BlackRexArt" options={{ height: 400}}/>

        <TwitterShareButton url={"https://twitter.com/BlackRexArt"} options={{ text: "this is the best account", via:"BlackRexArt"}}/>
      </div>
    </div>
  )
}

export default Widgets