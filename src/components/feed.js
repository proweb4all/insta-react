import React from "react";
import Posts from './posts';
import Users from './users';

export default function Feed () {
    return (
        <div className='container feed'>
            <Posts />
            <Users />
        </div>
    )
}