import "./Input.css";

export const Input = (props) => {
    const { className, variant, label, ...otherProps } = props;

    const containerClassName = `input input_variant_${variant} ${className ? className : ''}`;

    return (
        <div className={containerClassName}>
            <label className="input__label" id={otherProps.id}>{label}</label>
            <input className="input__field" {...otherProps}></input>
        </div>
    )
}