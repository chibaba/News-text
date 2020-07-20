import React, { useReducer } from 'react';

import AuthorsItem from './AuthorsItem';

import '/AuthorsList.css'


const AuthorsList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <h2>No authors news found</h2>
            </div>
        )
    }
    return <ul className="authors-list">
        {props.items.map(author => (
                 <AuthorsItem key={author.id} 
                 id={author.id}
                  title={author.title} 
                  subject={author.subject}
                  category={author.category} 
                  body={author.body}
                  image={author.image}
                  date={author.date}
                  NoStories={user.news}
                   />
        ))}
    </ul>
};

export default AuthorsList;