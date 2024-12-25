import { deleteProductInAPI } from '../../models/Manage/DeleteModel';
import { toast } from 'react-toastify';

export const handleOpenDeleteDialog = (productId, setDeleteItemId, setOpenDeleteDialog) => {
    setDeleteItemId(productId);
    setOpenDeleteDialog(true);
};

export const handleCloseDeleteDialog = (setOpenDeleteDialog, setDeleteItemId) => {
    setOpenDeleteDialog(false);
    setDeleteItemId(null);
};

export const handleConfirmDelete = async (deleteItemId, fetchProducts, setOpenDeleteDialog, setProducts) => {
    try {
        const data = await deleteProductInAPI(deleteItemId); 

        if (data.success) {
            toast.success('商品を削除しました。');
            fetchProducts(setProducts); 
        } else {
            toast.error('削除に失敗しました。');
        }
    } catch (error) {
        console.error('Error:', error);
        toast.error(error.message); 
    }
    setOpenDeleteDialog(false);
};
