import React from 'react';
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from "./Post";
import Profile from "../images/ganesh.jpg"

function Feed() {
  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className='feed__input'>
                <CreateIcon />
                <form>
                    <input type="text" />
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className="feed__inputOption">
                <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#7E7A33E" />
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
            </div>
        </div>

        {/*Post 1*/}
        <Post name="Ganesh Bhavar" description="Student at Vishwakarma Institute of Information Technology" message="Hello, I am Ganesh Bhavar currently in Third Year of BTech in Artificial Intelligence and Dara Science. I am building the front end of the linkedin.com website using React.js and Material UI." photoUrl={Profile} />
        
        {/*Post 2*/}
        <Post name="Ganesh Bhavar" description="Student at Vishwakarma Institute of Information Technology" message="Hello 👋,
'Who has the data has the Power'
The DataViz in association with datametica was a ray of sunshine ☀ that brightened up the monotonous routine we had been following for the past few months. And I am glad to say the event was a massive success! 💯
It was indeed a pleasure and gratitude to be a part of this grand event. 💥
These aren't just certificates🎖️, but the value and appreciation for the efforts that we all have put in. ✨🎁" img="https://media-exp1.licdn.com/dms/image/C4D22AQHhF_sRXGL9Qw/feedshare-shrink_800/0/1664765189392?e=1669248000&v=beta&t=Nc0z2ugTPnty9afaEntbG5bj-5fAuzZSHREGBzXzxvQ" photoUrl={Profile} />

       {/*Post 3*/}
       <Post name="Ganesh Bhavar" description="Student at Vishwakarma Institute of Information Technology" message="The International Data Science Symposium was a ray of sunshine that brightened up the monotonous routine we had been following for the past few months The event turned out to be huge success!

5 days, 11 speakers and numerous memories, what else would someone ask for? It was indeed my pleasure to be a part of this grand event

These aren't just certificates, but the value and appreciation for the efforts that we all have put in.
" img="https://media-exp1.licdn.com/dms/image/C4E22AQF9PLXbJX-RzQ/feedshare-shrink_800/0/1642426828418?e=1669248000&v=beta&t=jskv4XN57QZxMiQhFqnFuPI_f-PIideQ2LqTViT8ZzQ" photoUrl={Profile} /> 

    {/*Post 4*/}
    <Post name="Ganesh Bhavar" description="Student at Vishwakarma Institute of Information Technology" message="Hello everyone!!!
It's my pleasure to share you that I have been awarded Merit Scholarship Under Education Scholarship Scheme for Army by Army Welfare Education Society." img="https://media-exp1.licdn.com/dms/image/C4E22AQF4cD2Vdozd9g/feedshare-shrink_800/0/1647598052353?e=1669248000&v=beta&t=kRmQaUnpU4rvWK1-3C_7kjGA3mS1WLrv6B67ipIEhpc" photoUrl={Profile} />

    </div>
  )
};

export default Feed;