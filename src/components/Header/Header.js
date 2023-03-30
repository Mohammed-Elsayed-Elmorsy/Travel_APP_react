import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {

    const [click , setClick] = useState(false)

    const handleClick = ()=>{
        setClick(!click)
    }

    // const [icon , setIcon] = useState(true)


    // const ShowIcon = ()=>{
    //     if(window.innerWidth<=767){
    //         setIcon(true)
    //     }else{
    //         setIcon(false)
    //     }
    // }
    // window.addEventListener('resize' , ShowIcon)

  return (
    <header style={{display:'flex',justifyContent:'space-between'}}>
        
      <div className='container' style={{padding:'15px'}}>
      <h2 className='logo'>
            <Link to='/' onClick = {()=>{setClick(false)}}>
                TRVL
                <i className='fa fa-plane'></i>
            </Link>
        </h2>

        <div className='icon-container'>
           <i onClick={handleClick} className={click ? 'fa fa-times':'fa fa-bars'}></i>
        </div>

        <ul className={click?'nav-ul active':'nav-ul'}>
            <li>
                <Link onClick={handleClick} to='/'>Home</Link>
            </li>
            <li>
                <Link onClick={handleClick}  to='/services'>Services</Link>
            </li>
            <li>
                <Link onClick={handleClick} to='/contact'>Contact</Link>
            </li>
            <li>
                <Link onClick={handleClick} to='products'>Products</Link>
            </li>
            <li>
                <Link onClick={handleClick} to='sign-up'>Sign Up</Link>
            </li>
        </ul> 
      </div>

    </header>
  )
}

export default Header
