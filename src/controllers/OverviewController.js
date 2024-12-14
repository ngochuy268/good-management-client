
import { fetchProductsFromAPI } from '../models/OverviewModel';

export const loadProducts = async (setProducts) => {
    const products = await fetchProductsFromAPI();
    setProducts(products);
};
