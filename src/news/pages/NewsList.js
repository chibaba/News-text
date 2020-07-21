import  React from 'react'; 

import React from 'react';

import { useParams } from 'react-router-dom'


// import Button from '../../common/components/FormElements/Button'



import NewsList from '../components/NewsList';

const DUMMY_NEWS = [
    {
    id: '1',
    title: 'black',
    subject: 'lexus sport car',
    category: '1999',
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    body: 'IKJ 23456',
    date: '312 Herbert Macaulay Way',
   

},
{
    id: '1',
    title: 'black',
    subject: 'lexus sport car',
    category: '1999',
    image: img,
    body: 'IKJ 23456',
    date: '312 Herbert Macaulay Way',
   

}


];

const AuthorsNews = () => {
    const newsId = useParams().newsId;
    const viewedNews = DUMMY_NEWS.filter(news => news.creator === newsId);
    return <NewsList items={viewedNews} />;
};

export default AuthorsNews