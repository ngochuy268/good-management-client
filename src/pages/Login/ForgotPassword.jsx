import logo from '../../assets/loginImg/logo.jpg';
import styles from '../Login/css/ForgotPassword.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { handleSendOtp, handleVerifyOtp } from '../../controllers/Login/ForgotPasswordControler';

function ForgotPasswordInFo() {
    const [email, setEmail] = useState(''); 
    const [iD, setID] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState('INPUT_PHONE_NUMBER');
    const [validationMsg, setValidationMsg] = useState('');
    const history = useHistory();

    const validateAll = () => {
        const msg = {};
        if (!iD) msg.iD = 'IDを入力してください';
        if (!email) msg.email = 'メールアドレスを入力してください';
        setValidationMsg(msg);
        return Object.keys(msg).length === 0;
    };

    return (
        <div className={styles.changePasswordPage}>
            <div className={styles.changePasswordForm}>
                <div className={styles.pageLogo}>
                    <img src={logo} alt="logo" />
                </div>
                <form className={styles.form}>
                    {step === 'INPUT_PHONE_NUMBER' && (
                        <>
                            <div className={styles.formInputWithErr}>
                                <div className={styles.formInput}>
                                   <div className={styles.inputGroupAppend}>
                                        <span className={styles.inputGroupText}>
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="社員ID"
                                        className={styles.inputForm}
                                        onChange={(e) => setID(e.target.value)}
                                    />
                                </div>
                                {validationMsg.iD && <p>{validationMsg.iD}</p>}
                            </div>
                            <div className={styles.formInputWithErr}>
                                <div className={styles.formInput}>
                                    <div className={styles.inputGroupAppend}>
                                        <span className={styles.inputGroupText}>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </span>
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="メール"
                                        className={styles.inputForm}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />                                   
                                </div>
                                {validationMsg.email && <p>{validationMsg.email}</p>}
                            </div>
                            <div className={styles.formConfirmButton}>
                                <button
                                    type="button"
                                    className={styles.confirmButton}
                                    onClick={() => {
                                        if (validateAll()) {
                                            handleSendOtp(email, iD, setStep, (msg) => setValidationMsg({ ...validationMsg, server: msg }));
                                        }
                                    }}
                                >
                                    確認
                                </button>
                            </div>
                        </>
                    )}
                    {step === 'VERIFY_OTP' && (
                        <>
                            <div className={styles.otpParagraph}>
                                <p>OTP コードがメールに送信されました。OTP コードを確認して入力してください。</p>
                            </div>
                            <input
                                type="text"
                                placeholder="OTP"
                                className={styles.otpFormInput}
                                onChange={(e) => {
                                    setOtp(e.target.value);
                                }}
                            />
                            <div className={styles.formConfirmButton}>
                                <button type="button" className={styles.confirmButton} onClick={() => handleVerifyOtp(email, otp, history, iD)}>
                                    確認
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}

export default ForgotPasswordInFo;
