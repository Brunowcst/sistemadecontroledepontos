import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    console.log("Teste")
    const authenticated = true
    return authenticated ? <Outlet/> : <Navigate to="/"/>;
    
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
