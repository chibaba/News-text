import React, { useReducer } from 'react';

import AuthorsItem from './AuthorsItem';
import Card from '../../common/components/UIElements/Card';

import './AuthorsList.css'


const AuthorsList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
            <Card>
                <h2>No authors news found</h2>
                </Card>
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
                  NoStories={author.news}
                   />
        ))}
    </ul>
};

export default AuthorsList;