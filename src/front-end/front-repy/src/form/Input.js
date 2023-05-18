import styles from './styles/Input.module.css';

function Input({type, text, placeholder, name, value, handleOnChange}) {
    return (
        <div className={styles.container_input}>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
                autoComplete='on'
            />
        </div>
    );
}

export default Input;