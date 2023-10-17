import React from 'react'
import './Layout.css'

function Header() {
    return (
        <div className='header'>
            <div className='header-left'>
                <span>header 좌측</span>
            </div>

            <div className='header-center'>
                <span>중구 저동1가</span>
            </div>

            <div className='header-right'>
                <span>header 우측</span>
            </div>
        </div>
    )
}

export default Header
