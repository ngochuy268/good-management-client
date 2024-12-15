import { toast } from 'react-toastify';
import { updateProductInAPI } from '../../models/Manage/EditModel'

export const handleInputChange = (setEditProduct) => (e) => {
    const { name, value } = e.target;
    setEditProduct(prev => ({
        ...prev,
        [name]: value
    }));
};

export const handleClickOpen = (productId, products, setEditProduct, setOpen) => {
    const productToEdit = products.find(product => product.idgood === productId);
    if (productToEdit) {
        setEditProduct({
            idgood: productToEdit.idgood,
            namegood: productToEdit.namegood,
            sell: productToEdit.sell,
            purchase: productToEdit.purchase,
            status: productToEdit.status.toString()
        });
        setOpen(true);
    }
};
export const handleUpdate = async (editProduct, fetchProducts, setOpen, setProducts) => {
    try {
        const data = await updateProductInAPI(editProduct); 

        if (data.success) {
            toast.success('商品情報を更新しました。');
            setOpen(false); 
            fetchProducts(setProducts);
        }
        else toast.error('更新に失敗しました。');           
    }
    catch (error) {
        console.error('Error:', error);
        toast.error(error.message); 
    }
};
