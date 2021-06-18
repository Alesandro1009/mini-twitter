import React from 'react';
import { ListGroup} from 'reactstrap';

import PostListItem from '../post__list__item';

import './post__list.css'

const PostList = ({posts,onDelete,onToggleImportant,onToggleLiked}) => {
    const elements = posts.map((post) =>{
        const {id, ...postProps} = post;
        return (
            <li key={id} className = 'list-group-item'>
                <PostListItem 
                {...postProps} 
                onDelete={()=>{onDelete(id)}} 
                onToggleImportant={()=> onToggleImportant(id)}
                onToggleLiked={()=> onToggleLiked(id)}
                />
            </li>
        )
    });
    return(
      <ListGroup className="app-list list-group">
          {elements}
      </ListGroup>
    )
}

export default PostList;