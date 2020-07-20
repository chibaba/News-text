import React from 'react';

import AuthorsList from '../components/AuthorsList'
const Authors = () => {
    const AUTHORS = [
        {
        id: 'u1',
        title: 'Performace Complexity',
        subject: "Every booster still undergoes detailed inspections between launches.",
        category= 'Tech News',
        body= "82 with 42 posters participating\r\n<ul><li>\r\n Falcon 9 B1058.2 stands tall on SLC-40, ready to launch the South Korean militarys Anasis 2 communications satellite. \r\n</li><li>\r\n This booster 1058.2 is… [+2638 chars]",
        image= "https://cdn.arstechnica.net/wp-content/uploads/2020/07/ANASIS-ii-Jul-20-2020-0200-760x380.jpg",
        date= "2020-07-20T16:18:08Z",
        NoStories: 3

    }
]
    return  <AuthorsList items={AUTHORS} />
}


export default Authors;