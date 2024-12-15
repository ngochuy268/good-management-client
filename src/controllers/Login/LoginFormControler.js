import { useState } from 'react';
import LoginModel from '../../models/Login/LoginFormModel';
import { toast } from 'react-toastify';


const useLoginController = (history) => {
    const [idNhanVien, setID] = useState('');
    const [password, setPassword] = useState('');

    const validateInputs = () => {
        toast.dismiss();

        if (!idNhanVien.trim()) {
            toast.error('従業員コードを空にすることはできません!');
            return false;
        }

        if (!password.trim()) {
            toast.error('パスワードを空白にすることはできません!');
            return false;
        }

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (!password.match(passwordRegex)) {
            toast.error('パスワードには小文字、大文字、および少なくとも 1 つの数字が含まれている必要があります');
            return false;
        }

        return true;
    };

    const onSubmitLogin = async () => {
        toast.dismiss();
        if (validateInputs()) {
            try {
                const { success, data } = await LoginModel.loginUser({ id: idNhanVien, password });

                if (success) {
                    localStorage.setItem('userId', idNhanVien);
                    localStorage.setItem('token', data.token);
                    toast.success('ログインに成功しました!');
                    history.push('/overview');
                } else {
                    toast.error(data.message || 'IDまたはパスワードが間違っています！');
                }
            } catch (error) {
                toast.error(error.message);
            }
        }
    };

    return {
        idNhanVien,
        setID,
        password,
        setPassword,
        onSubmitLogin,
    };
};

export default useLoginController;
