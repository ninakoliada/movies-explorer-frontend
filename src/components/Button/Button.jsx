import { Link } from "react-router-dom";
import "./Button.css";

export const Button = (props) => {
    const className = `button ${props.className ? props.className : ''}`;

    if (props.href) {
        return (
            <a href={props.href}>
                <button {...props} className={className} />
            </a>
        )
    }

    if (props.to) {
        return (
            <Link to={props.to}>
                <button {...props} className={className} />
            </Link>
        )
    }

    return <button {...props} className={className} />
}