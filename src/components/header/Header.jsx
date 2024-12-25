import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faXmark, faBox, faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Dialog } from '@mui/material';
import logo from '../../assets/layoutImg/logo.png';

function Header({ handleOpenSideBarMenu }) {

    const [openSearch, setOpenSearch] = useState(false);


    const handleSearchClose = () => {
        setOpenSearch(false);
    };

    useEffect(() => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);


        $(`.${styles.headerStoreWrapper}`).onclick = function () {
            $(`.${styles.headerStore}`).classList.toggle(`${styles.active}`);
            $(`.${styles.headerStore}`).onclick = function (e) {
                e.stopPropagation();
            }
        }
    });

    return (
        <>
            <header className={styles.pageHeader}>
                <div className={styles.pageLogo}>
                    <div style={{ width: "80px" }} align="center">
                        <img src={logo} alt="page-logo" className={styles.logoIcon} />
                    </div>

                    <div className={styles.pageNameWrapper} style={{ textAlign: 'center' }}>
                        <p className={styles.pageName}>ホアンゴック株式会社</p>
                    </div>
                </div>
                <ul className={styles.headerComponent}>
                    <li className={styles.headerItem}>
                        <button className={styles.sideBarMenuButton} onClick={handleOpenSideBarMenu}><FontAwesomeIcon icon={faBars} /></button>
                    </li>                
                    <li className={styles.headerStoreWrapper} >
                        <FontAwesomeIcon icon={faBox} className={styles.storeIcon} />
                        <div className={styles.headerStore}>
                            <img src={require('../../assets/layoutImg/Kho.drawio.png').default} alt="" className={styles.storeImg} />
                        </div>
                    </li>
                </ul>
            </header>        
            {/* Search */}
            <Dialog open={openSearch} onClose={handleSearchClose} maxWidth='lg' fullWidth={true}>
                <div className={styles.closeButtonWrapper} onClick={handleSearchClose}>
                    <button className={styles.closeButton}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
            </Dialog>
        </>
    );
}
export default Header;