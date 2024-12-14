export const fetchProductsFromAPI = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/get-goods`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('サーバーエラーが発生しました。');
    }
};
