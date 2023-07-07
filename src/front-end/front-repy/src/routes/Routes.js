import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Funcionario from '../pages/Funcionario';
import Home from '../pages/Home';
import MainLayout from '../layout/MainLayout';
import RecuperarAcesso from '../pages/RecuperarAcesso';
import AlterarDados from '../pages/AlterarDados';
import Historico from '../pages/Historico'
import PrivateRoute from '../utils/PrivateRoute';
import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import ErrorPage from '../pages/ErrorPage';

function routes() {
    return (
        <div>
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path='*' element={<ErrorPage/>}/>
                        <Route path="/" element={<Login />} />
                        <Route path="/recuperar-acesso" element={<RecuperarAcesso />} />
                        <Route element={<MainLayout />}>
                            <Route element={<PrivateRoute/>}>
                                <Route path='/home' element={<Home/>}/>
                                <Route path='/funcionario' element={<Funcionario/>}/>
                                <Route path='/alterar-dados' element={<AlterarDados/>}/>
                                <Route path='/historico-marcacoes' element={<Historico/>}/>
                            </Route>
                        </Route>
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}


export default routes;