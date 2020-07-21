import React from 'react';



import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH}  from  '../../common/util/validators'
import Input from '../../common/components/FormElements/Input.js'
import Button from '../../common/components/FormElements/Button'
import { useForm } from '../../common/hooks/form-hook'
import './CarForm.css';






const NewCars = () => {
  const [formState, inputHandler] =  useForm ({
        
            title: {
                value: '',
                isValid: false
            },
        
        description: {
                value: '',
                isValid: false
            },
            address: {
                value: '',
                isValid: false
            }
        },
        false
    );
    
  

      const carSubmitHandler = event => {
          event.preventDefault();
          console.log(formState.inputs) // send value to
      }
   

    return <form className="car-form" onSubmit={carSubmitHandler}>
       <Input  
       id="title"
       element= "input" 
       type="text" 
       label="Title" validators={[VALIDATOR_REQUIRE()]} 
       errorText="Please enter a valid title" 
       onInput={inputHandler}

       />
       <Input 
       id= "description"
        element= "textarea" 
       type="text" 
       label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]} 
       errorText="Please enter a valid description of at least 5 characters" 
       onInput={inputHandler}

       />
         <Input 
       id= "address"
        element= "input" 
       type="text" 
       label="Address"
        validators={[VALIDATOR_REQUIRE()]} 
       errorText="Please enter a valid address" 
       onInput={inputHandler}

       />
       <Button type="submit" disabled={!formState.isValid}>Add Car</Button>

    </form>
}
export default NewCars;
