import "./Input.css";

export const Input = (props) => {
    const { className, variant, label, error, errorText, ...otherProps } = props;

    const containerClassName = `input input_variant_${variant} ${className ? className : ''}`;

    return (
        <div className={containerClassName}>
            <label className="input__label" id={otherProps.id}>{label}</label>
            <input className={`input__field ${error ? 'input_error' : ''}`} {...otherProps}></input>
            {error && errorText && <p className="input__error">{errorText}</p>}
        </div>
    )
}