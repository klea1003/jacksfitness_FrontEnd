import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'

function Router() {
    return (
        <>
			<Routes>
				<Route path='/*' element={<Layout />} />
			</Routes>
		</>
    )
}

export default Router
