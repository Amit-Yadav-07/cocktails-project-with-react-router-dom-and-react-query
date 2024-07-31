import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
function HomeLayout() {
    const navigation = useNavigation();


    const isPageLoading = navigation.state === 'loading'
    return (
        <>
            <Navbar />
            {isPageLoading ? <div className='loading'></div> : <Outlet />}

        </>
    )
}

export default HomeLayout;