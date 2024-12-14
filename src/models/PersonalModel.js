export const fetchUserDataFromAPI = async (userId, token) => {
    try {
        const response = await fetch(`http://localhost:5000/get-nhanvien/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        if (data.success) {
            return data.user;
        } else {
            throw new Error('Failed to fetch user data');
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
};

export const updateAvatarAPI = async (userId, base64Avatar) => {
    try {
        const response = await fetch(`http://localhost:5000/update-avatar/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ avatar: base64Avatar }),
        });
        const data = await response.json();
        if (data.success) {
            return data;
        } else {
            throw new Error(data.message || 'Failed to update avatar');
        }
    } catch (error) {
        console.error('Error updating avatar:', error);
        return null;
    }
};
