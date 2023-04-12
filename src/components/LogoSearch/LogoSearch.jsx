import React from 'react'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'

export const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img src={Logo} alt="" />
        <div className="Search">
            <input type="text" name="" id="" placeholder='#Explore' />
            <div className="s-icon">
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}
