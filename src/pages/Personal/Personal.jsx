// src/views/Personal.js

import styles from './Personal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCakeCandles,faVenusMars,faPhone,faEnvelope,faLocationDot,faFileSignature,} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import AvatarUploader from '../../components/shared/AvatarUploader';
import { loadUserData, handleAvatarUpload } from '../../controllers/PersonalController';
import PacmanLoader from "react-spinners/GridLoader";

function Personal() {
    const [loading, setLoading] = useState(true);
    const [isUpdating, setIsUpdating] = useState(false);
    const [userData, setUserData] = useState({
        id: '',
        name: '',
        gender: '',
        phone: '',
        email: '',
        address: '',
        birthday: '',
        avatar: null,
    });

    useEffect(() => {
        loadUserData(setUserData);
        setLoading(false);     
    }, []);

    const handleAvatarClick = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) =>
            handleAvatarUpload(userData.id, e.target.files[0], setUserData, setIsUpdating, toast);
        input.click();
    };

    if(loading) return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '80vh',
            flexDirection: 'column'
        }}>
            <PacmanLoader
                color="#ff6f61"
                size={70}
                loading={loading}
            />
        </div>
      );

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.wrapperTitle}>
                    <p>個人情報</p>
                </div>

                <div className={styles.employeeWrapper}>
                    <div className={styles.employeeInfoWrapper}>
                        <div className={styles.backgroundImg}>
                            <div className={styles.employeeBasicInfoWrapper}>
                                <AvatarUploader
                                    avatar={userData.avatar}
                                    isUpdating={isUpdating}
                                    handleAvatarClick={handleAvatarClick}
                                />
                                <div
                                    className={styles.employeeBasic}
                                    style={{ textAlign: 'center', marginTop: '20px' }}
                                >
                                    <span style={{ fontWeight: '700' }}>社員コード: {userData.id}</span>
                                </div>
                                <button
                                    className={styles.signOutButton}
                                    onClick={() => {
                                        localStorage.removeItem('userId');
                                        localStorage.removeItem('token');
                                        window.location.href = '/';
                                    }}
                                >
                                    <Link to="/">サインアウト</Link>
                                </button>
                            </div>
                        </div>
                        <div className={styles.employeeInfoContentWrapper}>
                            <div className={styles.employeeContentWrapper}>
                                <div className={styles.employeeContentInfoWrapper}>
                                    <div className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>
                                            <FontAwesomeIcon icon={faFileSignature} /> 姓名:
                                        </span>
                                        <p className={styles.employeeInfoParagraph}>{userData.name}</p>
                                    </div>
                                    <div className={styles.employeeContentInfoExpandWrapper}>
                                        <div className={styles.employeeInfoContent}>
                                            <span className={styles.employeeInfoTitle}>
                                                <FontAwesomeIcon icon={faCakeCandles} /> 誕生日:
                                            </span>
                                            <p className={styles.employeeInfoParagraph}>
                                                {userData.birthday}
                                            </p>
                                        </div>
                                        <div className={styles.employeeInfoContent}>
                                            <span className={styles.employeeInfoTitle}>
                                                <FontAwesomeIcon icon={faVenusMars} /> 性別:
                                            </span>
                                            <p className={styles.employeeInfoParagraph}>
                                                {userData.gender}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.employeeContentInfoExpandWrapper}>
                                        <div className={styles.employeeInfoContent}>
                                            <span className={styles.employeeInfoTitle}>
                                                <FontAwesomeIcon icon={faPhone} /> 電話番号:
                                            </span>
                                            <p className={styles.employeeInfoParagraph}>
                                                {userData.phone}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>
                                            <FontAwesomeIcon icon={faEnvelope} /> Email:
                                        </span>
                                        <p className={styles.employeeInfoParagraph}>
                                            {userData.email}
                                        </p>
                                    </div>
                                    <div className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>
                                            <FontAwesomeIcon icon={faLocationDot} /> 住所:
                                        </span>
                                        <p className={styles.employeeInfoParagraph}>
                                            {userData.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Personal;
