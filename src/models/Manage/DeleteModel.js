export const deleteProductInAPI = async (deleteItemId) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/delete-good/${deleteItemId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error:', error);
        throw new Error('サーバーエラーが発生しました。');
    }
};
