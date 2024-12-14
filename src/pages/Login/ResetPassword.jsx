// src/views/ChangePassword.js
import logo from '../../assets/loginImg/logo.jpg';
import styles from './css/ResetPassword.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { validateAll, handlePasswordChange } from '../../controllers/Login/ResetPasswordController';

function ChangePassword() {
    const { state } = useLocation();
    const { id } = state || {}; 

    const [passwordReset, setPasswordReset] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [errors, setErrors] = useState({
        password: '',
        passwordReset: '',
    });

    const confirm = async (e) => {
        toast.dismiss();
        e.preventDefault();
        const { valid, errors } = validateAll(password, passwordReset);
        if (valid) {
            handlePasswordChange(id, password, setErrors, toast, history);
        } else {
            setErrors(errors);
        }
    };

    const handlePressEnter = (event) => {
        if (event.charCode === 13 && event.code === "Enter") {
            confirm(event);
        }
    };

    return (
        <div className={styles.changePasswordPage}>
            <div className={styles.changePasswordForm}>
                <div className={styles.pageLogo}>
                    <img src={logo} alt="logo" />
                </div>
                <form className={styles.form}>
                    <div className={styles.formInput}>
                        <div className={styles.inputGroupAppend}>
                            <span className={styles.inputGroupText}><FontAwesomeIcon icon={faKey} /></span>
                        </div>
                        <input
                            className={styles.inputForm}
                            placeholder="パスワード"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {errors.password && <p className={styles.errInput1}>{errors.password}</p>}
                    <div className={styles.formInput}>
                        <div className={styles.inputGroupAppend}>
                            <span className={styles.inputGroupText}><FontAwesomeIcon icon={faKey} /></span>
                        </div>
                        <input
                            className={styles.inputForm}
                            placeholder="再入力のパスワード"
                            value={passwordReset}
                            onChange={(e) => setPasswordReset(e.target.value)}
                            onKeyPress={handlePressEnter}
                        />
                    </div>
                    {errors.passwordReset && <p className={styles.errInput3}>{errors.passwordReset}</p>}
                    <div className={styles.formConfirmButton}>
                        <button className={styles.confirmButton} onClick={confirm}>
                            Xác nhận
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword;
