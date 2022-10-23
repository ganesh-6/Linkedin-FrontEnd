import { Avatar } from '@mui/material';
import React from 'react';
import "./Sidebar.css";
import Profile from "../images/ganesh.jpg"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="background" />
            <Avatar src={Profile} className="sidebar__avator"/>
            <h2>Ganesh Bhavar</h2>
            <h4>ganesh.22010331@viit.ac.in</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on Post</p>
                <p className="sidebar__statNumber">23,543</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            <div className="recentItem">
                <span className="sidebar_hash">#</span>
                <p>React</p>
            </div>
            <div className="recentItem">
                <span className="sidebar_hash">#</span>
                <p>Programming</p>
            </div>
            <div className="recentItem">
                <span className="sidebar_hash">#</span>
                <p>Data Structure</p>
            </div>
            <div className="recentItem">
                <span className="sidebar_hash">#</span>
                <p>Front End Development</p>
            </div>
            <div className="recentItem">
                <span className="sidebar_hash">#</span>
                <p>Javascript</p>
            </div>
        </div>
    </div>
  )
};

export default Sidebar;