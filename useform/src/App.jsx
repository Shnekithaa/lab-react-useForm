import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import './App.css';

const App = () => {
  const {register, handleSubmit, formState: {errors, isValid}} = useForm();
  const [fields, setFields] = useState();
  const [submitted, setSubmit] = useState(false);
  const [visible, setVisible] = useState(false);
  const onSubmit = (data) => {
    setFields(data);
    setSubmit(true);
    console.log(data);
  }

  return (
    <div>
      <h1>React Forms Library</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
      {submitted ? (<div className='msg'>Register Successful</div>) : null}
        <input type="text" placeholder='firstName' {...register("firstName", {required: "First name is Required"})}/>
        <span>{errors.firstName?.message}</span>
        <input type="text" placeholder='lastName' {...register("lastName", {required: "Last name is Required"})}/>
        <span>{errors.lastName?.message}</span>
        <input type="email" placeholder='email' {...register("email", {required: "Email is Required" ,
         pattern: {
          value:  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Invalid email",}
         })}/>
        <span>{errors.email?.message}</span>
        <input type={visible ? 'text' : 'password'} placeholder='password' {...register("password", {required: "Password is Required", minLength : {
          value: 4,
          message: "Password must be more than 4 characters"
        }, maxLength: {
          value: 20,
          message: "Password must be less than 20 characters"
        }
      })}
        />
        <span className='click' onClick={() => setVisible(!visible)}>Click</span>
        <span>{errors.password?.message}</span>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default App;
