import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function User() {
  return (
    <div>
       <h1>User List</h1>
       <ul>
        <li><NavLink to="./user1">user1</NavLink></li>
        <li><NavLink to="./user2">user2</NavLink></li>
        <li><NavLink to="./user3">user3</NavLink></li>
        <li><NavLink to="./user4">user4</NavLink></li>
       </ul>
    </div>
  )
}

export default User
