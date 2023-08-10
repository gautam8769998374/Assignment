import React from 'react'

const ProfilePage = ({ userData }) => {
  return (
    <div>
        <h1>Profile Page</h1>
        <p>Email:{userData.email}</p>
        <p>Password:{userData.password}</p>
    </div>
  )
}

export default ProfilePage