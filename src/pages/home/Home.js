import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { USER_MAIN_DATA } from '../../services/mock/mockData'
// import FetchFullData from '../../services/fetchData/FetchFullData'

const Home = () => {
  const userMainData = []

  userMainData.push(USER_MAIN_DATA)

  //   const AllUsersMainDataAPI = [
  //     FetchFullData(12)[0].data,
  //     FetchFullData(18)[0].data,
  //   ]

  // console.log(AllUsersMainDataAPI);

  return (
    <div>
      <img
        className="logoHome"
        src="https://user.oc-static.com/upload/2020/08/18/15977560509272_logo%20%285%29.png"
        alt="Logo SportSee"
      />
      <div className="mockedUserBox">
        <h2> All mocked users </h2>{' '}
        {userMainData.map((itemArray) =>
          itemArray.map((item) => (
            <Link to={`/dashboard/${item.id}`} key={`mockedUser-${item.id}`}>
              {' '}
              {`Mocked User ${item.id}`}{' '}
            </Link>
          ))
        )}{' '}
      </div>{' '}
      {/* <div className='ApiUserBox'>
                                        <h2 className='titleAllApi'>All API users</h2>
                                        {AllUsersMainDataAPI.map((item) =>
                                            <Link to={`/dashboard/${item.id}`} key={`apiUser-${item.id}`}>
                                                {`Api User ${item.id}`}
                                            </Link>)}
                                    </div> */}{' '}
    </div>
  )
}
export default Home
