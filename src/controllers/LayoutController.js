// src/controllers/LayoutAdminController.js
import { fetchUserData } from '../models/LayoutModel';

export const getUserData = async (setUserData, setAvatarUpdateTime) => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    if (!userId || !token) {
        console.error('User ID or token is missing');
        return;
    }

    const user = await fetchUserData(userId, token);
    if (user) {
        setUserData(user);
    }
};

export const handleAvatarUpdate = (setAvatarUpdateTime) => {
    const listener = () => {
        setAvatarUpdateTime(Date.now());
    };

    window.addEventListener('avatarUpdate', listener);
    return () => {
        window.removeEventListener('avatarUpdate', listener);
    };
};

export const toggleSidebar = (isSidebarOpen, setSidebarState) => {
    setSidebarState(!isSidebarOpen);
};

export const closeSidebarOnSmallScreen = (setSidebarState) => {
    if (window.innerWidth <= 1220) {
        setSidebarState(false);
    }
};
