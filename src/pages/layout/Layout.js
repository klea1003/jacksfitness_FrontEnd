import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'
import Contents from './Contents'

function Layout() {
    return (
        <div className='layout'>
			<Header />
			<Contents />
			<Footer />
		</div>
    )
}

export default Layout
