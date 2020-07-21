import React from 'react';

import Card from '../../common/components/UIElements/Card'

import './NewsItem.css';

const NewsItem = props => {
    return <li className="news-item">
    <Card className="news-item__content">

        <div className="news-item__image">
            <img src={props.image} alt={props.title} />
        </div>
        <div className="news-item__info">
            <h2>{props.title}</h2>
            <h3>{props.subject}</h3>
            <p>{props.category}</p>
            <p>{props.body}</p>
            <p>{props.date}</p>

        </div>
        <div className="news-item__actions">
            <button>Read more</button>
            <button>Edit</button>
            <button>Delete</button>


        </div>
        </Card>
    </li>
}


export default NewsItem;