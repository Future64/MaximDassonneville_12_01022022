import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { USER_MAIN_DATA } from '../../services/mock/mockData'
// import FetchFullData from '../../services/fetchData/FetchFullData'

const Home = (props) => {
  const userMainData = []

  userMainData.push(USER_MAIN_DATA)

  console.log(props)

  return (
    <div>
      <img
        className="logoHome"
        src="https://user.oc-static.com/upload/2020/08/18/15977560509272_logo%20%285%29.png"
        alt="Logo SportSee"
      />
      <div className="mockedUserBox">
        <h2> All mocked users </h2>
        <button className="buttonHome">Switch</button>
        {userMainData.map((itemArray) =>
          itemArray.map((item) => (
            <Link to={`/dashboard/${item.id}`} key={`mockedUser-${item.id}`}>
              {' '}
              {`Mocked User ${item.id}`}{' '}
            </Link>
          ))
        )}{' '}
      </div>{' '}
    </div>
  )
}
export default Home
