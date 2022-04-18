import React from 'react'
import UserCard from './UserCard'

const UsersList = ({users, deleteUser, setIsShowing, setUserTarget, setObjectForm}) => {
  return (
    <div className='users-container'>
      {
        users?.map(user => (
          <UserCard 
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUserTarget={setUserTarget}
            setIsShowing={setIsShowing}
            setObjectForm={setObjectForm}
          />
        ))
      }
    </div>
  )
}

export default UsersList