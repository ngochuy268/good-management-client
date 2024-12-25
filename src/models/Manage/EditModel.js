
export const updateProductInAPI = async (editProduct) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/update-good`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editProduct),
        });

        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error:', error);
        throw new Error('サーバーエラーが発生しました。');
    }
};
