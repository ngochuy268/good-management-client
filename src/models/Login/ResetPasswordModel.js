
export const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return regex.test(password);
};

export const changePasswordApi = async (id, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/change-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, password }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('エラーが発生しました。もう一度お試しください');
    }
};
