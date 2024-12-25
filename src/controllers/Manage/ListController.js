import { fetchProductsFromAPI } from '../../models/Manage/ListModel';
import { toast } from 'react-toastify';

export const fetchProducts = async (setProducts, setLoading) => {
    try {
        const data = await fetchProductsFromAPI();
        if (data.success) {
            setProducts(data.data);       
            setLoading(false);
        } else {
            toast.error('データの取得に失敗しました。');
        }
    } catch (error) {
        console.error('Error:', error);
        toast.error('サーバーエラーが発生しました。');
    }
};
