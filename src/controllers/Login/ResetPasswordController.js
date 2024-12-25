import { changePasswordApi, validatePassword } from '../../models/Login/ResetPasswordModel';

export const validateAll = (password, passwordReset) => {
    let errors = {
        password: '',
        passwordReset: '',
    };
    let valid = true;

    if (!password.trim()) {
        errors.password = 'パスワードを空白にすることはできません。';
        valid = false;
    } else if (!validatePassword(password)) {
        errors.password = 'パスワードには小文字、大文字、および少なくとも 1 つの数字が含まれている必要があります';
        valid = false;
    }

    if (!passwordReset.trim()) {
        errors.passwordReset = 'パスワードを空白にすることはできません。';
        valid = false;
    } else if (password !== passwordReset) {
        errors.passwordReset = 'パスワードが一致しません!';
        valid = false;
    }

    return { valid, errors };
};

export const handlePasswordChange = async (id, password, setErrors, toast, history) => {
    try {
        const response = await changePasswordApi(id, password);
        if (response) {
            toast.success('パスワードが正常に変更されました。');
            history.push('/');
        } else {
            toast.error('エラーが発生しました。もう一度お試しください');
        }
    } catch (error) {
        toast.error(error.message);
    }
};
