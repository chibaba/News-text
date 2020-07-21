import React from 'react';

import AuthorsList from '../components/AuthorsList'
const Authors = () => {
    const AUTHORS = [
        {
        id: 'u1',
        title: 'Performace Complexity',
        category: 'Tech News',
        subject: 'Every booster still .',
        body: "82 with 42 posters participating\r\n<ul><li>\r\n Falcon 9 B1058.2 stands tall on SLC-40,",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRc96kcLicYy25CFi7P_ocMargwSC_vjRxIMg&usqp=CAU",
        date:"2020-07-20T16:18:08Z",
        NoStories: 3

    }
]
    return  <AuthorsList items={AUTHORS} />
}


export default Authors;