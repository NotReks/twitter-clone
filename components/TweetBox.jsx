import { Avatar, Button } from '@mui/material'
import React, {useState, useEffect} from 'react'
import db from './firebase'
import './TweetBox.css'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = e => {
    e.preventDefault()

    db.collection('posts').add({
      displayName: "Reks",
      username: "BlackRexArt",
      verified: false,
      text:tweetMessage,
      image: tweetImage,
      avatar:"https://cdn.discordapp.com/attachments/1048226726796341258/1052987092055113818/ichigoat.png"
    })

    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox__input">
          <Avatar src='https://cdn.discordapp.com/attachments/1048226726796341258/1052987092055113818/ichigoat.png'></Avatar>
          <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text"/>
        </div>
        <input onChange={(e) => setTweetImage(e.target.value)} className='tweetBox__imageInput' placeholder="Optional: Enter image URL" type="text"/>

        <Button onClick={sendTweet} className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox