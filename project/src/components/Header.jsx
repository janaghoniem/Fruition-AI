import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center mt-2 ml-5 mr-5 text-white text-right text-[24px] fixed top-0 left-0 right-0 z-50'>
        <a className='logo' href="#Hero" rel="noopener noreferrer">
            Fruition AI
        </a>
        <div className='nav-anchors'>
            <a href='#About' rel="noopener noreferrer">About</a>
            <a href='#Performance' rel="noopener noreferrer">Performance</a>
            <a href='#Demo' rel="noopener noreferrer">Demo</a>
        </div>
    </header>
  )
}

export default Header
