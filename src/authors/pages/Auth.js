import React, { useState, useContext } from 'react';


import  Card from '../../common/components/UIElements/Card'
import Input from '../../common/components/FormElements/Input'
import Button from '../../common/components/FormElements/Button'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE}    from '../../common/util/validators';
import { useForm } from '../../common/hooks/form-hooks'
import { AuthContext } from '../../common/context/auth-context'

import './Auth.css';

const Auth = () => {
    const auth = useContext (AuthContext)
    const [isLoginMode, setIsLoginMode] = useState(true)
    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    },
    false
    );
      
    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData({
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid)
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, false)
        }
        setIsLoginMode(prevMode => !prevMode);
    }
    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
        auth.login();
    }
    return <Card className="authentication">
    <h2> Login Required</h2>
    <hr />
        <form onSubmit={authSubmitHandler}>
         {!isLoginMode && <Input element="input"
         id="name" type="text"
         label="your name"
         validators={[VALIDATOR_REQUIRE()]}
         onInput={inputHandler} />}
           <Input element="input"
               id="email"
               type="email"
               label="E-Mail"
               validators={[VALIDATOR_EMAIL()]}
               errorText="please enter a valid email address."
               onInput={inputHandler}
           />
           <Input element="input"
               id="password"
               type="password"
               label="password"
               validators={[VALIDATOR_MINLENGTH(5)]}
               errorText="please enter a valid email PASSWORD, (at least 5 characters)."
               onInput={inputHandler}
           />
           <Button type="submit" disabled=
           {!formState.isValid}>
           {isLoginMode ? 'LOGIN' : 'SIGNUP'}
           </Button>
        </form>
        <Button inverse onClick={switchModeHandler}> 
        SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
        </Button>
    </Card>
}


export default Auth