import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { InputField } from './InputField';
import { GenderField } from './GenderField';
import { SigninController } from '../../controllers/SigninController';
import { faUser, faKey, faPhone, faEnvelope, faLocationDot, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../assets/loginImg/avatar.jpg';
import logo from '../../assets/loginImg/logo.jpg';
import './css/Signin.scss';

function SigninView() {
    const history = useHistory();
    const [formData, setFormData] = useState({
        idNhanVien: '',
        name: '',
        password: '',
        gender: '',
        phone: '',
        email: '',
        address: '',
        birthday: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        toast.dismiss();
        e.preventDefault();
        const result = await SigninController.handleSubmit(formData, avatar);
        if (result.success) {
            toast.success('社員を正常に追加しました。');
            history.push('/');
        } else {
            toast.error(result.message);
        }
    };

    return (
        <div className="backgroundOverlay">
            <div className="formWrapper">
                <div className="loginPage">
                    <div className="loginForm">
                        <div className="pageLogo">
                            <img src={logo} alt="logo" />
                        </div>
                        <form className='form' onSubmit={handleSubmit}>
                        <InputField
                                icon={faUser}
                                type="text"
                                name="idNhanVien"
                                placeholder="ID"
                                value={formData.idNhanVien}
                                onChange={handleChange}
                            />

                            <InputField
                                icon={faUser}
                                type="text"
                                name="name"
                                placeholder="姓名"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <InputField
                                icon={faKey}
                                type="password"
                                name="password"
                                placeholder="パスワード"
                                value={formData.password}
                                onChange={handleChange}
                            />

                            <GenderField
                                value={formData.gender}
                                onChange={(e) => handleChange({
                                    target: { name: 'gender', value: e.target.value }
                                })}
                            />

                            <InputField
                                icon={faBirthdayCake}
                                type="date"
                                name="birthday"
                                placeholder="誕生日"
                                value={formData.birthday}
                                onChange={handleChange}
                            />

                            <InputField
                                icon={faPhone}
                                type="number"
                                name="phone"
                                placeholder="電話番号"
                                value={formData.phone}
                                onChange={handleChange}
                            />

                            <InputField
                                icon={faEnvelope}
                                type="text"
                                name="email"
                                placeholder="メール"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <InputField
                                icon={faLocationDot}
                                type="text"
                                name="address"
                                placeholder="住所"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            <div className='formLoginButton'>
                                <button type='submit' className='loginButton'>
                                    登録
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SigninView;
