import './css/LoginForm.scss';
import logo from '../../assets/loginImg/logo.jpg';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import useLoginController from '../../controllers/Login/LoginFormControler';

function Login() {
    const history = useHistory();
    const {
        idNhanVien,
        setID,
        password,
        setPassword,
        onSubmitLogin,
    } = useLoginController(history);

    const handlePressEnter = (event) => {
        if (event.charCode === 13 && event.code === "Enter") {
            onSubmitLogin();
        }
    };

    return (
        <div className='loginPage'>
            <div className='loginForm'>
                <div className='pageLogo'>
                    <img src={logo} alt="logo" />
                </div>
                <form className='form'>
                    <div className="formInputWithErr">
                        <div className='formInput'>
                            <div className='inputGroupAppend'>
                                <span className='inputGroupText'><FontAwesomeIcon icon={faUser} /></span>
                            </div>
                            <input
                                type="text"
                                name='idNhanVien'
                                className='name inputForm'
                                placeholder='社員コード'
                                value={idNhanVien}
                                onChange={e => setID(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="formInputWithErr">
                        <div className='formInput'>
                            <div className='inputGroupAppend'>
                                <span className='inputGroupText'><FontAwesomeIcon icon={faKey} /></span>
                            </div>
                            <input
                                type="password"
                                name='password'
                                className='password inputForm'
                                placeholder='パスワード'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                onKeyPress={handlePressEnter}
                            />
                        </div>
                    </div>

                    <div className='formLoginButton'>
                        <button type='button' className='loginButton' onClick={onSubmitLogin}>ログイン</button>
                    </div>
                    <div className="forgotpassword_signin">
                        <div className='formForgotPassword'>
                            <Link to='/forgotPasswordinfo' className='link'>パスワードをお忘れですか</Link>
                        </div>
                        <div className='formForgotPassword'>
                            <div className='link'>アカウントがないのか？<Link to='/signin' className='signin'>登録</Link></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
