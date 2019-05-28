import React from 'react';
import User from './user';
import Palette from './palette';

const Profile = () => {
    return (
        <div className='container profile'>
            <User 
                photo='https://cdn1.flamp.ru/46947dfb3b4f79a8ec455ca53aea72ae_300_300.jpg' 
                alt='I am'
                name='Monster' 
            />
            <Palette />
        </div>
    )
}

export default Profile;