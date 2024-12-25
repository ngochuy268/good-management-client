import { SigninModel } from '../models/SigninModel';
import { toast } from 'react-toastify';

export const SigninController = {
    handleSubmit: async (formData, avatar) => {
        const validation = SigninModel.validateForm(formData);
        if (!validation.isValid) {
            return { success: false, message: validation.message };
        }

        try {
            const response = await fetch(avatar);
            const blob = await response.blob();
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = async () => {
                    try {
                        const result = await SigninModel.submitForm(formData, reader.result);
                        console.log(result.success);
                        if (result.success) {
                            localStorage.setItem('userId', formData.idNhanVien);
                        }
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                };
                reader.readAsDataURL(blob);
            });
        } catch (error) {
            return { success: false, message: 'アバターの処理中にエラーが発生しました' };
        }
    }
};