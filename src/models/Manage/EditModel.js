
export const updateProductInAPI = async (editProduct) => {
    try {
        const response = await fetch('http://localhost:5000/update-good', {
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
