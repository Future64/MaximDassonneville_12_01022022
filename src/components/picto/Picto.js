import React from 'react'
import PropTypes from 'prop-types'
import './Picto.css'

const Picto = (props) => {
  return <img src={props.src} alt="picto"></img>
}
export default Picto

Picto.propTypes = {
  src: PropTypes.string.isRequired,
}
