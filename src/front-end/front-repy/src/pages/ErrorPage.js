import { Link } from "react-router-dom";
import styles from './styles/ErrorPage.module.css'
import ErrorPageSvg from '../material/icons/page_not_found.svg'

function ErrorPage() {
    return (
        <div className={styles.container}>
            <img className={styles.imageError} src={ErrorPageSvg}/>
        </div>
    );
}

export default ErrorPage;