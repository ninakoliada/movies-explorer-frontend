import "./FilterCheckbox.css";

export const FilterCheckbox = (props) => {
    const className = `filter-checkbox__decoration ${props.checked ? "filter-checkbox__decoration-on" : ''} ${props.className ? props.className : ''}`
    return (
        <div onClick={props.onClick} className={className}></div>
    )
}