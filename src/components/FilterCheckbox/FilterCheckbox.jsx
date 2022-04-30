import "./FilterCheckbox.css";

export const FilterCheckbox = (props) => {
    const className = `filter-checkbox__decoration ${props.checked ? "filter-checkbox__decoration-on" : ''} ${props.className ? props.className : ''}`
    return (
        <label onClick={props.onClick} className={className} htmlFor={props.id}>
            <input {...props} className="filter-checkbox__input" type="checkbox" checked={props.checked} />
        </label>
    )
}