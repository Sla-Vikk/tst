import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return <div>
        <div>
            <span>my posst</span><br />
            <button >new post</button>
        </div>
        <div className={s.postList}>
            <Post message='het hop' like='50'/>
            <Post message='Hey, this is my first post' like='34'/>
        </div>
    </div>
}

export default MyPosts;