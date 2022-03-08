import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div>
      <img
        className="logoHome"
        src="https://user.oc-static.com/upload/2020/08/18/15977560509272_logo%20%285%29.png"
        alt="Logo SportSee"
      />
      <div className="mockedUserBox">
        <h2> All API users </h2>
        <Link to="/dashboard/12">User 12</Link>
        <Link to="/dashboard/18">User 18</Link>
      </div>
    </div>
  )
}
export default Home
