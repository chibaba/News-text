import React from 'react';

import '/AuthorsItem.css'


const AuthorsItem = props => {
    return (
        <li className="authors-list">
          <div className="authors-item__content">
          <div className="authors-item__image">
              <img src={props.image} alt={props.name} />
          </div>
          <div className="authors-item__info">
           <h2>{props.title}</h2>
           <h2>{props.category}</h2>
           <h3>{props.body}</h3>
           <h3>{props.NoStories} {props.NoStories === 1 ? 'story' : 'News'}</h3>

          </div>

          </div>

        </li>
    )
};

export default AuthorsItem;