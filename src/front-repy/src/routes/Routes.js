import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import ErrorPage from '../pages/ErrorPage';

//PAGES
import Login from '../pages/Login';
import Funcionario from '../pages/Funcionario';
import Home from '../pages/Home';
import MainLayout from '../layout/MainLayout';
import RecuperarAcesso from '../pages/RecuperarAcesso';
import AlterarDados from '../pages/AlterarDados';
import Historico from '../pages/Historico';
import MarcarPonto from '../pages/MarcarPonto';
import PrivateRoute from '../utils/PrivateRoute';
import FuncionarioDetalhes from '../pages/FuncionarioDetalhes';
import Cadastro from '../pages/Cadastro';

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
                                <Route path='/funcionario/cadastro' element={<Cadastro/>}/>
                                <Route path='/funcionario/detalhes/:id' element={<FuncionarioDetalhes/>}/>
                                <Route path='/marcar-ponto' element={<MarcarPonto/>}/>
                            </Route>
                        </Route>
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}


export default routes;