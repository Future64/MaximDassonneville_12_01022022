import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  const titleError = 'Erreur 404!'
  return (
    <div className="errorPage">
      <img
        className="logoHome"
        src="https://user.oc-static.com/upload/2020/08/18/15977560509272_logo%20%285%29.png"
        alt="Logo SportSee"
      />
      <div className="mockedUserBox">
        <h2>{titleError}</h2>
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

export default Error404
