import React from 'react';

import Card from '../../common/components/UIElements/Card'
import './AuthorsList';

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
        
    </ul>
}


export default AuthorsList;