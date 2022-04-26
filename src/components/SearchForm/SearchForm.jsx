import { useState } from 'react';
import Search from "../../images/search-form-search.svg";
import { Button } from "../Button/Button";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";


import "./SearchForm.css";

export const SearchForm = ({ onSubmit }) => {
    const [search, setSearch] = useState('');
    const [onlyShort, setOnlyShort] = useState(false);

    function onSubmitSearch (event) {
        event.preventDefault();

        onSubmit({ search, onlyShort });
    }

    function onClickCheckbox () {
        setOnlyShort(!onlyShort);
    }

    function onChangeSearchValue (event) {
        setSearch(event.target.value);
    }

    return (
        <form className="searchForm" onSubmit={onSubmitSearch}>
            <div className="searchForm__search-area">
                <img className="searchForm__search-image searchForm__desktop-filters" alt="search" src={Search} />
                <input className="searchForm__search-input" type="text" placeholder="Фильм" value={search} onChange={onChangeSearchValue} />

                <div className="searchForm-container">
                    <Button className="searchForm__button" type="submit">Найти</Button>
                    <div className="searchForm__stick searchForm__desktop-filters"></div>
                    <FilterCheckbox className="searchForm__checkbox searchForm__desktop-filters" id="filter" checked={onlyShort} onClick={onClickCheckbox} />
                    <label className="searchForm__filter-text searchForm__desktop-filters" htmlFor="filter">Короткометражки</label>
                </div>
            </div>

            <div className="searchForm__touch-filters">
                <FilterCheckbox className="searchForm__checkbox" id="filter" checked={onlyShort} onClick={onClickCheckbox} />
                <label className="searchForm__filter-text" htmlFor="filter">Короткометражки</label>
            </div>

            <div className="searchForm__long-stick"></div>
        </form>
    )
}
