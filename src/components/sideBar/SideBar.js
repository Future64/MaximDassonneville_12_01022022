import React from 'react'
import './SideBar.css'
import LeftNavBar from '../../components/leftNavBar/LeftNavBar'

const SideBar = () => {
  return (
    <div className="sideBar">
      <LeftNavBar />
      <p className="copyright">Copyright SportSee 2021</p>
    </div>
  )
}

export default SideBar
