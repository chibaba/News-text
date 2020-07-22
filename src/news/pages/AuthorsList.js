import  React from 'react'; 


import { useParams } from 'react-router-dom'


//import Button from '../../common/components/FormElements/Button'



import NewsList from '../components/NewsList';

const DUMMY_NEWS = [
    {
        id: 'u1',
        title: 'Performace Complexity',
        category: 'Tech News',
        subject: 'Every booster still .',
        body: "82 with 42 posters participating\r\n<ul><li>\r\n Falcon 9 B1058.2 stands tall on SLC-40,",
        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        date:"2020-07-20T16:18:08Z",
        NoStories: 3

    },
    {
        id: 'uu2',
        title: 'Stock Prices',
        category: 'Business News',
        subject: 'Every booster still .',
        body: "82 with 42 posters participating\r\n<ul><li>\r\n Falcon 9 B1058.2 stands tall on SLC-40,",
        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        date:"2020-07-20T16:18:08Z",
        NoStories: 3

    },
    




];

const AuthorsNews = () => {
    const newsId = useParams().newsId;
    const viewedNews = DUMMY_NEWS.filter(news => news.creator === newsId);
    return <NewsList items={viewedNews} />;
};

export default AuthorsNews