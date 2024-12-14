
import { fetchUserDataFromAPI, updateAvatarAPI } from '../models/PersonalModel';

export const loadUserData = async (setUserData) => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const userData = await fetchUserDataFromAPI(userId, token);
    if (userData) {
        setUserData(userData);
    }
};

export const handleAvatarUpload = async (userId, file, setUserData, setIsUpdating, toast) => {
    if (!file) return;

    setIsUpdating(true);
    try {
        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64Avatar = reader.result;
            const response = await updateAvatarAPI(userId, base64Avatar);

            if (response) {
                setUserData((prev) => ({ ...prev, avatar: base64Avatar }));
                window.dispatchEvent(new Event('avatarUpdate'));
                toast.success('アバターを正常に更新しました');
            } else {
                toast.error('アバターの更新に失敗しました');
            }
        };
        reader.readAsDataURL(file);
    } catch (error) {
        toast.error('アバターの更新中にエラーが発生しました');
    } finally {
        setIsUpdating(false);
    }
};
