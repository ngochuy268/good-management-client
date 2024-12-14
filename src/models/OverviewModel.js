
export const fetchProductsFromAPI = async () => {
    try {
        const response = await fetch('http://localhost:5000/get-goods');
        const data = await response.json();
        if (data.success) {
            return data.data;
        } else {
            console.error('Failed to fetch products');
            return [];
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};
