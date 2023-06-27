import { Link } from "react-router-dom";

function ErrorPage(props) {
    return (
        <div>
            Página de redirecionamento!
            <Link to="/">Voltar para Login</Link>
        </div>
    );
}

export default ErrorPage;