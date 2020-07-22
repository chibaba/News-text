import React, { useEffect, useState}  from 'react';

import { useParams } from 'react-router-dom';
import Input from '../../common/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../common/util/validators';


import Card from '../../common/components/UIElements/Card';

import { useForm } from '../../common/hooks/form-hooks'
import Button from '../../common/components/FormElements/Button';

import './NewsForm.css' ;


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
        id: 'u2',
        title: 'Performace Complexity',
        category: 'Business News',
        subject: 'Every booster still .',
        body: "82 with 42 posters participating\r\n<ul><li>\r\n Falcon 9 B1058.2 stands tall on SLC-40,",
        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        date:"2020-07-20T16:18:08Z",
        NoStories: 3

    }



];



const UpdateNews = () => {
    const [isLoading, setIsLoading] = useState(true);

    const newsId = useParams().newsId;

    
    const  [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
        
    },
    false
    ) 
    
    const identifiedNews = DUMMY_NEWS.find(c => c.id === newsId);

    useEffect(() => {
        if (identifiedNews) {
            setFormData({
                title: {
                    value: identifiedNews.title,
                    isValid: true
                },
                description: {
                    value: identifiedNews.description,
                    isValid: true
                }
            },
             true
             )

        }
        
         setIsLoading(false);
    }, [setFormData, identifiedNews]);

 

            const newsUpdateSubmitHandler = event => {
                event.preventDefault();
                console.log(formState.inputs);
            }



    if(!identifiedNews) {
        return ( <div className="center">
        <Card>
            <h2>
                Could not find latest news!
            </h2>
            </Card>
        </div>
        );
    }
     if (isLoading) {
        return ( <div className="center">
        <h2>
            Loading......
        </h2>
    </div>
    );

     }
    return(
   
     <form className="news-form" onSubmit={newsUpdateSubmitHandler}>
        <Input id="title" 
        element="input" 
        type="text" 
        label="Title"
         validators={[VALIDATOR_REQUIRE()]} 
             errorText="Please enter  a valid title."
             onInput={inputHandler}
             initialValue={formState.inputs.title.value}
             initialValid={formState.inputs.title.isValid}
         />
           <Input id="description" 
        element="textarea" 
         label="Description"
         validators={[VALIDATOR_MINLENGTH(5)]} 
             errorText="Please enter  a valid description(min. of 5 characters)."
             onInput={inputHandler}
             initialValue={formState.inputs.description.value}
             initialValid={formState.inputs.description.isValid}
         />
         <Button type="submit"  disabled={!formState.isValid}>UpdATE nEWS</Button>
    </form>
        )
    
};

export default UpdateNews;