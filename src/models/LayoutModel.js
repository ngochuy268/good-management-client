
export const fetchUserData = async (userId, token) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/get-nhanvien/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        if (data.success) {
            return data.user;
        } else {
            console.error('Failed to fetch user data');
            return null;
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
};
