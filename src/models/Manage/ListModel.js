export const fetchProductsFromAPI = async () => {
    try {
        const response = await fetch('http://localhost:5000/get-goods');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('サーバーエラーが発生しました。');
    }
};
