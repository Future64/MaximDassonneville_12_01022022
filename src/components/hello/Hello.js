import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Hello.css'

const Hello = (props) => {
  let [firstname, setFirstname] = useState(props.data.userInfos.firstName)

  return (
    <div className="container-hello">
      <h1>
        Bonjour <span>{firstname}</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏 </h2>
    </div>
  )
}
export default Hello

Hello.propTypes = {
  data: PropTypes.object.isRequired,
}
