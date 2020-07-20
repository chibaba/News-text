import React from 'react';
import { Link } from 'react-router-dom'

import  Avatar from '../../common/components/UIElements/Avatar'
import './AuthorsItem.css';


const AuthorsItem = props => {
    return (
        <li className="authors-list">
          <div className="authors-item__content">
          <div className="authors-item__image">
              <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="authors-item__info">
           <h2>{props.title}</h2>
           <h2>{props.category}</h2>
           <h2>{props.subject}</h2>
          <Link to={`/${props.id}/News`}>
           <h3>{props.body}</h3>
          </Link>
           <h3>{props.NoStories} {props.NoStories === 1 ? 'story' : 'More News'}</h3>
           <h3>{props.date}</h3>
          </div>
          </div>

        </li>
    )
};

export default AuthorsItem;