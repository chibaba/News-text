import React from 'react';

import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH}  from  '../../common/util/validators'
import Input from '../../common/components/FormElements/Input.js'
import Button from '../../common/components/FormElements/Button'
import { useForm } from '../../common/hooks/form-hooks'
import './NewsForm.css';






const NewNews = () => {
  const [formState, inputHandler] =  useForm ({
        
            title: {
                value: '',
                isValid: false
            },
        
        body: {
                value: '',
                isValid: false
            },
            category: {
                value: '',
                isValid: false
            }
        },
        false
    );
    
  

      const newsSubmitHandler = event => {
          event.preventDefault();
          console.log(formState.inputs) // send value to
      }
   

    return <form className="news-form" onSubmit={newsSubmitHandler}>
       <Input  
       id="title"
       element= "input" 
       type="text" 
       label="Title" validators={[VALIDATOR_REQUIRE()]} 
       errorText="Please enter a valid title" 
       onInput={inputHandler}

       />
       <Input 
       id= "body"
        element= "textarea" 
       type="text" 
       label="body"
        validators={[VALIDATOR_MINLENGTH(5)]} 
       errorText="Please enter a valid character least 5 characters" 
       onInput={inputHandler}

       />
         <Input 
       id= "category"
        element= "input" 
       type="text" 
       label="Address"
        validators={[VALIDATOR_REQUIRE()]} 
       errorText="Please enter a valid category" 
       onInput={inputHandler}

       />
       <Button type="submit" disabled={!formState.isValid}>Add news</Button>

    </form>
}
export default NewNews;
