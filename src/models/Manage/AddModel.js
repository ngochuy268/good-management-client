export const createProduct = async (productData) => {
    try {
        const response = await fetch('http://localhost:5000/insert-good', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData)
        });

        if (response.ok) {
            return { success: true, message: "商品が正常に追加されました!" };
        } else {
            const errorData = await response.json();
            return { success: false, message: errorData.message || "エラーが発生しました。もう一度お試しください。" };
        }
    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: "サーバーエラーが発生しました。もう一度お試しください。" };
    }
}
