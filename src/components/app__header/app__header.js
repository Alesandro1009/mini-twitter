import React from 'react';

import './app__header.scss'

const AppHeader = ({allPosts,liked}) =>{
   
    return(
        <div className="app-header d-flex">
            <h1>Max Vasilchenko</h1>
            <h2> {allPosts} записей, из них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;