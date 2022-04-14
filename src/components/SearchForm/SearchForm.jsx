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
                    <img className="searchForm__search-image" alt="search" src={Search} />
                    <input className="searchForm__search-input" type="text" placeholder="Фильм"></input>
                <div className="searchForm-container">
                    <Button className="searchForm__button">Найти</Button>
                    <div className="searchForm__stick"></div>
                    <FilterCheckbox id="filter" checked={checkboxActive} onClick={onClickCheckbox} />
                    <label  className="searchForm__filter-text" for="filter">Короткометражки</label>
                </div>
            </div>
            <div className="searchForm__long-stick"></div>
        </section>
    )
}
