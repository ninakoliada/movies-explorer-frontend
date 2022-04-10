import "./Button.css";

export const Button = (props) => {
    const className = `button ${props.className ? props.className : ''}`
    return <button {...props} className={className} />
}