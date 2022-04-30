import Search from "../../images/search-form-search.svg";
import { Button } from "../Button/Button";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";

import "./SearchForm.css";

export const SearchForm = ({ onSubmit, onChange, search, onlyShort }) => {
    function onSubmitSearch (event) {
        event.preventDefault();

        onSubmit({ search, onlyShort });
    }

    return (
        <form className="searchForm" onSubmit={onSubmitSearch} onChange={onChange}>
            <div className="searchForm__search-area">
                <img className="searchForm__search-image searchForm__desktop-filters" alt="search" src={Search} />
                <input className="searchForm__search-input" type="text" placeholder="Фильм" name="search" value={search}  />

                <div className="searchForm-container">
                    <Button className="searchForm__button" type="submit">Найти</Button>
                    <div className="searchForm__stick searchForm__desktop-filters"></div>
                    <FilterCheckbox className="searchForm__checkbox searchForm__desktop-filters" name="onlyShort" id="desktop-checkbox" checked={onlyShort}/>
                    <label className="searchForm__filter-text searchForm__desktop-filters" htmlFor="desktop-checkbox">Короткометражки</label>
                </div>
            </div>

            <div className="searchForm__touch-filters">
                <FilterCheckbox className="searchForm__checkbox" name="onlyShort" id="touch-checkbox" checked={onlyShort} />
                <label className="searchForm__filter-text" htmlFor="touch-checkbox">Короткометражки</label>
            </div>

            <div className="searchForm__long-stick"></div>
        </form>
    )
}
