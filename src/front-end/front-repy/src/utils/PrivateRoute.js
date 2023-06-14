import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import {useContext} from 'react'
import AuthContext from '../context/AuthContext';


const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    // console.log("Private router chamada")
    return !user ? <Navigate to="/"/> : <Outlet/>
}

export default PrivateRoute;

// console.log("Teste")
//     const auth = false;
//     return auth ? <Outlet/> : <Navigate to="/"/>;

// return (
//     <Routes>
//         <Route {...rest}>{!authenticated ? <redirect to={"/"} /> : children}</Route>
//     </Routes>
// )


// import { Navigate, Outlet, Route, Routes, useNavigate, redirect } from 'react-router-dom';
