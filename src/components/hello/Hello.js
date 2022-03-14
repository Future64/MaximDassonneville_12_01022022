import React from 'react'
import PropTypes from 'prop-types'
import './Hello.css'

const Hello = ({ data }) => {
  return (
    <div className="container-hello">
      <h1>
        Bonjour <span>{data.userInfos.firstName}</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏 </h2>
    </div>
  )
}
export default Hello

Hello.propTypes = {
  data: PropTypes.object.isRequired,
}
