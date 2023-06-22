import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';
import MainLayout from '../layout/MainLayout';
import RecuperarAcesso from '../pages/RecuperarAcesso';
import PrivateRoute from '../utils/PrivateRoute';
import React, {Fragment} from 'react';
import { AuthProvider } from '../context/AuthContext';
import ErrorPage from '../pages/ErrorPage';

function routes() {
    return (
        <div>
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/recuperar-acesso" element={<RecuperarAcesso />} />
                        <Route path='/error-page' element={<ErrorPage/>}/>
                        <Route element={<MainLayout />}>
                            <Route element={<PrivateRoute/>}>
                                <Route path='/home' element={<Home/>}/>
                                <Route path='/cadastro' element={<Cadastro/>}/>
                            </Route>
                        </Route>
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}


export default routes;