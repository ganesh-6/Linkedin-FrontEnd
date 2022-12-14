import React from 'react';
import { Avatar } from '@material-ui/core';
import "./Post.css";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InputOption from "./InputOption"

function Post({ name, description,img, message, photoUrl }) {
  return (
    <div className='post'>
        <div className="post__header">
            <Avatar src={photoUrl}/>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
          <p>{message}</p>
          {img && <img src={img} alt="certificate" />}
        </div>
        
        <div className="post__buttons">
          <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
          <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
          <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
        </div>
    </div>
  )
}

export default Post;