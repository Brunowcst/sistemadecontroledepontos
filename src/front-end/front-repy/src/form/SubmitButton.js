import styles from './styles/SubmitButton.module.css';

function SubmitButton({text}) {
    return (
        <div>
            <button className={styles.button}>
                {text}
            </button>
        </div>
    );
}

export default SubmitButton;