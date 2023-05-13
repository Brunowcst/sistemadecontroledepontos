

function Input({type, text, placeholder, name, value, handleOnChange}) {
    return (
        <div>
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