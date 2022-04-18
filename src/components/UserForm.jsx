import React from 'react'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

const UserForm = ({setIsShowing, createUser, userTarget, objectForm, updateUser}) => {

  const {register, handleSubmit, reset} = useForm()

  const defaultValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: ''
  }
  
  useEffect(() => {
    if(userTarget !== null){
      reset(userTarget)
    } else {
      reset(defaultValues)
    }
  },[userTarget])

  const submit = data => {
    if(objectForm.title === 'New User'){
      createUser(data)
      reset(defaultValues)
      setIsShowing(false)
    } else {
      data.id = userTarget.id
      updateUser(userTarget.id, data)
      reset(defaultValues)
      setIsShowing(false)
    }
  }

  return (
    <div className='background-form'>
      <article className='form-container'>
        <h2 className='title-form'>{objectForm.title}</h2>
        <div className='equis' onClick={() => setIsShowing(false)}>x</div>
        <form className='form' onSubmit={handleSubmit(submit)}>
          <div className='section-form-container'>
            <label className='label-form' htmlFor="name">First name</label>
            <input
              className='input-form'
              type="text"
              id='name'
              placeholder='Enter the username'
              {...register('first_name')}
            />
          </div>
          <div className='section-form-container'>
            <label className='label-form' htmlFor="last-name">Last name</label>
            <input
              className='input-form'
              type="text"
              id='last-name'
              placeholder="Enter the user's last name"
              {...register('last_name')}
            />
          </div>
          <div className='section-form-container'>
            <label className='label-form' htmlFor="email">Email</label>
            <input
              className='input-form'
              type="text"
              id='email'
              placeholder="Enter the user's email"
              {...register('email')}
            />
          </div>
          <div className='section-form-container'>
            <label className='label-form' htmlFor="password">Password</label>
            <input
              className='input-form'
              type="password"
              id='password'
              placeholder='Enter a password for the user'
              {...register('password')}
            />
          </div>
          <div className='section-form-container'>
            <label className='label-form' htmlFor="birthday">Birthday</label>
            <input
              className='input-form'
              type='date'
              id='birthday'
              placeholder="Enter the user's birthday"
              {...register('birthday')}
            />
          </div>
          <button className='button-form'>{objectForm.text_button}</button>
          <div className='cancel' onClick={() => setIsShowing(false)}>Cancel</div>
        </form>
      </article>
    </div>
  )
}

export default UserForm