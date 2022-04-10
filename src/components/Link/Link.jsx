import { Link as RouterLink } from 'react-router-dom';
import "./Link.css";

export const Link = (props) => {
    const className = `link ${props.className ? props.className : ''}`;

    if (props.href) {
        return <a {...props} className={className} />
    }
    
    return <RouterLink {...props} className={className} />
}
