import React from 'react'

const Header = ({setIsShowing, setObjectForm, setUserTarget}) => {

  const showForm = () => {
    setObjectForm({
      title: 'New User',
      text_button: 'Add new user'
    })
    setUserTarget(null)
    setIsShowing(true)
  } 
  
  return (
    <header className='header'>
      <h1 className='users-title'>CRUD Users</h1>
      <button className='btn-create-user' onClick={showForm}>Create a new user</button>
    </header>
  )
}

export default Header