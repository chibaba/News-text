import React from 'react';

import Card from '../../common/components/UIElements/Card'
import './AuthorsList';
import NewsItem from './NewsItem';

const AuthorsList = props => {
    if (props.items.length === 0) {
        return (
         <div className="news-list center">
        <Card>
            <h2>No News found. Maybe create one?</h2>
            <button>Share News</button>
        </Card>

        </div>
        );
    }
    return <ul className="news-list">
     {props.items.map(news => <NewsItem key={news.id} 
     id={news.id} 
     title={news.title} 
     subject={news.subject} 
     category={news.category}
     body={news.body}
     image={news.image}
     date={news.date}
      />)}

    </ul>
}


export default AuthorsList;