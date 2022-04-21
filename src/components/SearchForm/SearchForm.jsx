import Search from "../../images/search-form-search.svg";
import { Button } from "../Button/Button";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import { useState } from "react";

import "./SearchForm.css";

export const SearchForm = () => {
    const [checkboxActive, setCheckboxActive] = useState(false);

    function onClickCheckbox () {
        setCheckboxActive(!checkboxActive);
    }

    return (
        <section className="searchForm">
            <div className="searchForm__search-area">
                    <img className="searchForm__search-image searchForm__desktop-filters" alt="search" src={Search} />
                    <input className="searchForm__search-input" type="text" placeholder="Фильм"></input>

                <div className="searchForm-container">
                    <Button className="searchForm__button">Найти</Button>
                    <div className="searchForm__stick searchForm__desktop-filters"></div>
                    <FilterCheckbox className="searchForm__checkbox searchForm__desktop-filters" id="filter" checked={checkboxActive} onClick={onClickCheckbox} />
                    <label className="searchForm__filter-text searchForm__desktop-filters" for="filter">Короткометражки</label>
                </div>
            </div>

            <div className="searchForm__touch-filters">
                <FilterCheckbox className="searchForm__checkbox" id="filter" checked={checkboxActive} onClick={onClickCheckbox} />
                <label className="searchForm__filter-text" for="filter">Короткометражки</label>
            </div>

            <div className="searchForm__long-stick"></div>
        </section>
    )
}
