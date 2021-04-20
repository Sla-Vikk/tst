import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}><div>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="main-img"/>
    </div>
        <div>avatar + description</div>
        <div>
            <div >my posst</div>
            <div >new post</div>
        </div>
        <div className={s.item}>post1</div>
        <div className={s.item}>post2</div>
    </div>
}

export default Profile;