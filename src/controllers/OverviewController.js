
import { fetchProductsFromAPI } from '../models/OverviewModel';

export const loadProducts = async (setProducts, setLoading) => {
    const products = await fetchProductsFromAPI();
    setProducts(products);
    setLoading(false);
};
