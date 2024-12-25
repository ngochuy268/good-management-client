import styles from './Add.module.scss';
import { useState } from 'react';
import { handleUpdate } from '../../../controllers/Manage/AddController'; 
function Add() {

    const [img, setImg] = useState('');
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [sell, setSell] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleIDChange = (e) => {
        setID(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleCostChange = (e) => {
        setCost(e.target.value);
    }

    const handleSellChange = (e) => {
        setSell(e.target.value);
    }

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImg(reader.result); 
            };
            reader.readAsDataURL(file); 
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>追加</p>
                    </div>

                    <div className={styles.addGoodsWrapper}>
                        <div className={styles.responsiveAddGoods}>
                            <div className={styles.addGoods}>                             
                                <div className={styles.addGoodsItems}>
                                    <span>ID</span>
                                    <input type="text" value={id} className={styles.addGoodsInput} placeholder='ID'
                                        onChange={handleIDChange}
                                    />
                                </div>
                                <div className={styles.addGoodsItems}>
                                    <span>名前</span>
                                    <input type="text" value={name} className={styles.addGoodsInput} placeholder='名前'
                                        onChange={handleNameChange}
                                    />
                                </div>
                                <div className={styles.addGoodsItems}>
                                    <span>数量</span>
                                    <input type="number" value={quantity} className={styles.addGoodsInput} placeholder='数量'
                                        onChange={handleQuantityChange}
                                    />
                                </div>
                                <div className={styles.addGoodsItems}>
                                    <span>買値</span>
                                    <input type="number" value={cost} className={styles.addGoodsInput} placeholder='買値'
                                        onChange={handleCostChange}
                                    />
                                </div>
                                <div className={styles.addGoodsItems}>
                                    <span>売値</span>
                                    <input type="number" value={sell} className={styles.addGoodsInput} placeholder='売値'
                                        onChange={handleSellChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.addGoodsImgWrapper}>
                            <span>製品写真</span>
                            <input type="file" name="upload" className={styles.addGoodsInput} onChange={handleImageChange} />
                        </div>
                       
                        <div className={styles.saveButtonWrapper}>
                            <button className={styles.saveButton} onClick={() => handleUpdate({ id, name, cost, sell, quantity }, img, setImg, setID, setName, setCost, setSell, setQuantity)}>追加</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add;
