import styles from './List.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { Dialog, DialogTitle } from '@mui/material';
import { useEffect, useState } from 'react';
import PacmanLoader from "react-spinners/GridLoader";
import { fetchProducts } from '../../../controllers/Manage/ListController';
import { handleInputChange, handleClickOpen, handleUpdate } from '../../../controllers/Manage/EditController';
import { handleOpenDeleteDialog, handleCloseDeleteDialog, handleConfirmDelete } from '../../../controllers/Manage/DeleteController';

function List() {
    const [loading, setLoading] = useState(true);

//------------------------------編集------------------------------ 
    const [open, setOpen] = useState(false);
    const [editProduct, setEditProduct] = useState({
        idgood: '',
        namegood: '',
        sell: '',
        purchase: '',
        status: '1'
    });

//------------------------------削除-------------------------------
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);

//------------------------------リスト------------------------------
    const [products, setProducts] = useState([]);
     useEffect(() => {
        fetchProducts(setProducts, setLoading);
    }, []);

    if(loading) return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh',
            flexDirection: 'column'
        }}>
            <PacmanLoader
                color="#ff6f61"
                size={70}
                loading={loading}
            />
        </div>
      );

    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>リスト</p>
                    </div>

                    <div className={styles.listGoodsInfoWrapper}>
                        <div className={styles.listGoodsContainer}>
                            {products.map((product, key) => (
                                <div className={styles.listGoods} key={key + 1}>
                                    <div className={styles.listGoodsWrapper}>
                                        <div className={styles.listGoodsHeader}>
                                            <b>{product.namegood}</b>
                                            <div className={styles.ribbonWrapper}>
                                                {product.status === 1 ? (
                                                    <div className={clsx(styles.ribbon, styles.on)}>
                                                        生産中
                                                    </div>
                                                ) : (
                                                    <div className={clsx(styles.ribbon, styles.off)}>
                                                        一時停止
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className={styles.listGoodsBody}>
                                            <div className={styles.listGoodInfoWrapper}>
                                                <img alt="Product" className={styles.listGoodsImg} src={product.image} />
                                                <div className={styles.listGoodInfoItem}>
                                                    <div className={styles.listGoodInfo}>
                                                        <span>商品コード: </span> <p>{product.idgood}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.listGoodSpecificationWrapper}>
                                                <h3>商品価格</h3>
                                                <div className={styles.listGoodSpecificationItem}>
                                                    <div className={styles.listGoodSpecification}>
                                                        <span>売値: </span> <p>{product.sell}￥</p>
                                                    </div>
                                                    <div className={styles.listGoodSpecification}>
                                                        <span>買値: </span> <p>{product.purchase}￥</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.listGoodsFunctionButton}>
                                            <button className={styles.listGoodsDeleteButton} onClick={() => handleOpenDeleteDialog(product.idgood, setDeleteItemId, setOpenDeleteDialog)}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                            <button className={styles.listGoodsEditButton} onClick={() => handleClickOpen(product.idgood, products, setEditProduct, setOpen)}>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 編集ダイアログ */}
            <Dialog open={open} onClose={() => setOpen(false)} className={styles.dialogWrapper} maxWidth='xl' fullWidth={true}>
                <div className={styles.closeButtonWrapper} onClick={() => setOpen(false)}>
                    <button className={styles.closeButton}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <DialogTitle align='center' sx={{ fontWeight: 600, fontSize: 30 }}>商品情報編集</DialogTitle>
                <div className={styles.goodEditContainer}>
                    <div className={styles.goodEditWrapper}>
                        <h3>商品</h3>
                        <div className={styles.goodEditInputWrapper}>
                            <div className={styles.goodEditInputItem}>
                                <p>商品名</p>
                                <input type="text" name='namegood' className={styles.goodEditInput} value={editProduct.namegood} onChange={(e) => handleInputChange(setEditProduct)(e)} />
                            </div>
                            <div className={styles.goodEditInputItem}>
                                <p>買値</p>
                                <input type="text" name='purchase' className={styles.goodEditInput} value={editProduct.purchase} onChange={(e) => handleInputChange(setEditProduct)(e)} />
                            </div>
                            <div className={styles.goodEditInputItem}>
                                <p>売値</p>
                                <input type="text" name='sell' className={styles.goodEditInput} value={editProduct.sell} onChange={(e) => handleInputChange(setEditProduct)(e)} />
                            </div>
                            <div className={styles.goodEditInputItem}>
                                <p>状態</p>
                                <select name='status' className={styles.goodEditSelect} value={editProduct.status} onChange={(e) => handleInputChange(setEditProduct)(e)}>
                                    <option value="1">生産中</option>
                                    <option value="0">一時停止</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={styles.saveButtonWrapper}>
                        <button className={styles.saveButton} onClick={() => handleUpdate(editProduct, fetchProducts, setOpen, setProducts, setLoading)}>アップデート</button>
                    </div>
                </div>
            </Dialog>

            {/* 削除ダイアログ */}
            <Dialog open={openDeleteDialog} onClose={() => handleCloseDeleteDialog(setOpenDeleteDialog, setDeleteItemId)} className={styles.dialogWrapper} maxWidth='sm' fullWidth={true}>
                <div className={styles.closeButtonWrapper} onClick={() => handleCloseDeleteDialog(setOpenDeleteDialog, setDeleteItemId)}>
                    <button className={styles.closeButton}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <DialogTitle align='center' sx={{ fontWeight: 600, fontSize: 30 }}>商品削除の確認</DialogTitle>
                <div className={styles.deleteDialogContainer}>
                    <div className={styles.deleteDialogContent}>
                        <p>この商品を削除してもよろしいですか？</p>
                        <p className={styles.deleteWarning}>この操作は元に戻せません。</p>
                    </div>
                    <div className={styles.deleteButtonWrapper}>
                        <button className={styles.cancelButton} onClick={() => handleCloseDeleteDialog(setOpenDeleteDialog, setDeleteItemId)}>
                            キャンセル
                        </button>
                        <button className={styles.deleteButton} onClick={() => handleConfirmDelete(deleteItemId, fetchProducts, setOpenDeleteDialog, setProducts)}>
                            削除
                        </button>
                    </div>
                </div>
            </Dialog>
        </>
    );
}

export default List;
