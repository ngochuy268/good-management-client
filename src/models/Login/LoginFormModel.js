const LoginModel = {
    async loginUser(credentials) {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();
            return { success: response.ok, data };
        } catch (error) {
            throw new Error('サーバーへの接続中にエラーが発生しました。');
        }
    },
};

export default LoginModel;