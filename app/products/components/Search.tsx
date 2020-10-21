import React from 'react'
import styles from '../../styles/Search.module.scss'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
    return (
        <>
        <div className={styles.mainDiv}>
            <div className={styles.searchitem}>
                <div className={styles.inputFeilds}>
                    <input  className={styles.inputFeild} type="text" placeholder="Search Fruits & Vegitables" name="search"/>
                </div>
                
                <FontAwesomeIcon icon={faSearch} className={styles.searchIcon}/>
            </div>

            <div className={styles.sortItems}>
                <span> <FontAwesomeIcon icon={faSearch} className={styles.sortIcon}/></span>
                <h2 className={styles.sortItem}>Sort/Filter</h2>
                
            </div>
        </div>
        </>
    )
}

export default Search
