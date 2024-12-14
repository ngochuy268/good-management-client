import { createProduct } from '../../models/Manage/AddModel';
import { toast } from 'react-toastify';

export const resetForm = (setImg, setID, setName, setCost, setSell, setQuantity) => {
    setImg('');
    setID('');
    setName('');
    setCost('');
    setSell('');
    setQuantity('');
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
        fileInput.value = '';
    }
}

export const handleUpdate = async (formData, img, setImg, setID, setName, setCost, setSell, setQuantity) => {
    toast.dismiss();

    if (formData.name.trim() === '' || formData.cost.trim() === '' || formData.sell.trim() === '' 
        || formData.quantity.trim() === '' || formData.id.trim() === '' || !img) {
            toast.error("すべての情報を入力してください!");
            return;
    }

    const productData = {
        id: formData.id,
        name: formData.name,
        cost: formData.cost,
        sell: formData.sell,
        quantity: formData.quantity,
        image: img,
        status: 1
    };

    const result = await createProduct(productData);
    if (result.success) {
        toast.success(result.message);
        resetForm(setImg, setID, setName, setCost, setSell, setQuantity);  
    } else {
        toast.error(result.message);
    }
}
