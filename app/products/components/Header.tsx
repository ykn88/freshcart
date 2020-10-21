import React from 'react'
import styles from '../../styles/Header.module.scss';
import { faHome,faShoppingCart,faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
    return (
        <>
        <div className={styles.mainDiv}>
            <div className={styles.logo}>
                {/* <span className={styles.logoImg}><i className="fa fa-opencart" aria-hidden="true"></i></span> */}
                
              <span> <FontAwesomeIcon icon={faHome} className={styles.logoImg}/></span>
                <h2 className={styles.logoH2}>Fresh<span className={styles.logoSpan}>Cart</span></h2>
            </div>

            <div className={styles.headItems}>
               <span> <FontAwesomeIcon icon={faShoppingCart} className={styles.ProfileIcons} /></span>
               
               <span> <FontAwesomeIcon icon={faUserCircle} className={styles.ProfileIcons} /></span>
                {/* <span className={styles.ProfileIcons}><i className="fa fa-shopping-cart" aria-hidden="true"></i></span> */}
                {/* <span className={styles.ProfileIcons}><i className="fa fa-shopping-cart" aria-hidden="true"></i></span> */}
                {/* <div className={styles.dropdown}>
                   <button className={styles.dropbtn}>Drop Bown
                       <div className={styles.dropdownContaint}>
                           <a href="#" className={styles.anchor}>Link 1</a>
                           <a href="#" className={styles.anchor}>Link 2</a>
                       </div>

                   </button>
               </div> */}
            </div>

            
            
        </div>
        </>
    )
}

export default Header
