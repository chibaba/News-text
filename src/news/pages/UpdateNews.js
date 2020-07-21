import React, { useEffect, useState}  from 'react';

import { useParams } from 'react-router-dom';
import Input from '../../common/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../common/util/validators';

import img from '../../common/components/images/download.jpeg'
import img2 from '../../common/components/images/download (1).jpeg'
import Card from '../../common/components/UIElements/Card';

import { useForm } from '../../common/hooks/form-hook'
import Button from '../../common/components/FormElements/Button';

import './CarForm.css' ;


const DUMMY_CARS = [
    {
    id: '1',
    color: 'black',
    brand: 'lexus sport car',
    year: '1999',
    image: img,
    plateNum: 'IKJ 23456',
    address: '312 Herbert Macaulay Way',
    location: {
        lat:6.5065566,
        lng:3.3762775
    },

    creator: 'u1'
},
{
    id: '2',
    color: 'black',
    brand: 'lexus sport car2',
    year: '1999',
    image: img2,
    plateNum: 'ABJ 3457',
    address: '312 Herbert Macaulay Way',
    location: {
        lat:6.5065566,
        lng:3.3762775
    },

    creator: '2'
}

];
const UpdateCar = () => {
    const [isLoading, setIsLoading] = useState(true);

    const carId = useParams().carId;

    
    const  [formState, inputHandler, setFormData] =   useForm({
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
    
    const identifiedCar = DUMMY_CARS.find(c => c.id === carId);

    useEffect(() => {
        if (identifiedCar) {
            setFormData({
                title: {
                    value: identifiedCar.title,
                    isValid: true
                },
                description: {
                    value: identifiedCar.description,
                    isValid: true
                }
            },
             true
             )

        }
        
         setIsLoading(false);
    }, [setFormData, identifiedCar]);

 

            const carUpdateSubmitHandler = event => {
                event.preventDefault();
                console.log(formState.inputs);
            }



    if(!identifiedCar) {
        return ( <div className="center">
        <Card>
            <h2>
                Could not find Place!
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
   
     <form className="car-form" onSubmit={carUpdateSubmitHandler}>
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
         <Button type="submit"  disabled={!formState.isValid}>UpdATE cAR</Button>
    </form>
        )
    
};

export default UpdateCar