import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import MainLayout from '../layout/MainLayout';

function routes(props) {
    return (
        <Router>
            <Outlet/>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route element={<MainLayout/>}>
                    <Route path="/cadastro" element={<Cadastro />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default routes;