import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer.jsx/Footer';
import { useLoader } from '../../Context/LoaderContext';
import Loader from '../../components/Loader/Loader';

const Root = () => {
    const navigation = useNavigation();
    const {showLoader,hideLoader} = useLoader();

    useEffect(() => {
        if(navigation.state === "loading") showLoader("Loading Page...");
        else hideLoader();
    }, [navigation.state]);
    return (
        <div className='max-w-[1260px] mx-auto bg-gray-300'>
            <Loader/>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;