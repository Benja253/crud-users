import React from 'react'
import UsersList from './components/UsersList'
import Header from './components/Header'
import UserForm from './components/UserForm'
import axios from 'axios'
import { useEffect, useState } from 'react'

const CrudUsers = () => {

  const [users, setUsers] = useState()
  const [isShowing, setIsShowing] = useState(false)
  const [userTarget, setUserTarget] = useState(null)
  const [objectForm, setObjectForm] = useState({})

  const getUsers = () =>{
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(({data}) => setUsers(data))
  }

  const deleteUser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers())
  }

  const createUser = user => {
    axios.post('https://users-crud1.herokuapp.com/users/', user)
    .then(() => getUsers())
  }

  const updateUser = (id, userUpdate) => {
    axios.patch(`https://users-crud1.herokuapp.com/users/${id}/`, userUpdate)
      .then()
  }

  useEffect(() => {
    getUsers()
  },[])

  return (
    <div className='app-container'>
      <Header
        setIsShowing={setIsShowing}
        setObjectForm={setObjectForm}
        setUserTarget={setUserTarget}
      />
      {
        isShowing &&
          <UserForm 
            createUser={createUser}
            setIsShowing={setIsShowing}
            userTarget={userTarget}
            objectForm={objectForm}
            updateUser={updateUser}
          />
      }
      <UsersList
        deleteUser={deleteUser}
        users={users}
        setIsShowing={setIsShowing}
        setUserTarget={setUserTarget}
        setObjectForm={setObjectForm}
      />
    </div>
  )
}

export default CrudUsers