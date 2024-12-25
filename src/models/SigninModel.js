import { useHistory } from 'react-router-dom';

export const SigninModel = {
    validateForm: (formData) => {
        const { idNhanVien, name, gender, phone, email, address, birthday, password } = formData;

        if (!idNhanVien.trim() || !name.trim() || !gender.trim() || 
            !phone.trim() || !email.trim() || !address.trim() || 
            !birthday.trim() || !password.trim()) {
            return { isValid: false, message: 'すべての情報を入力してください。' };
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            return { isValid: false, message: 'メールの形式が正しくありません。' };
        }

        if (!/^\d{10}$/.test(phone)) {
            return { isValid: false, message: '電話番号は正確に 10 桁でなければなりません。' };
        }

        const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (!password.match(decimal)) {
            return { isValid: false, message: 'パスワードには小文字、大文字、および少なくとも 1 つの数字が含まれている必要があります' };
        }

        return { isValid: true };
    },

    submitForm: async (formData, avatarBase64) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/insert-nhanvien`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    id: formData.idNhanVien,
                    name: formData.name,
                    password: formData.password,
                    gender: formData.gender,
                    phone: formData.phone,
                    email: formData.email,
                    address: formData.address,
                    birthday: formData.birthday,
                    avatar: avatarBase64
                }),
            });
            return await response.json();
        } catch (error) {
            throw new Error('社員を正常に追加しました');
        }
    }
};